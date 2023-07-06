const express = require('express')
const app = express()
const port = 3000
const path = require('path');
var bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
var methodOverride = require('method-override')

const fs = require('fs');
// handlebars 
const exphbs = require('express-handlebars')

const hbs = exphbs.create({
    extname: '.hbs',
    layoutsDir: 'main',
    defaultLayout: 'main',
});

app.engine('handlebars', hbs.engine)
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'main'))

const { multipleMongooseToObject } = require('./public/js/jav/mongoose')
const { mongooseToObject } = require('./public/js/jav/mongoose')


var cookieParser = require('cookie-parser')
app.use(cookieParser())

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride('_method'))

app.use('/public', express.static(path.join(__dirname, '/public')))
app.use('/img', express.static(path.join(__dirname, '/img')))
app.use('/video', express.static(path.join(__dirname, '/video')))

const AccountModel = require('./models/account');
const User = require('./models/user');


app.get('/manager/:id/edit', (req, res, next) => {
    User.findById(req.params.id)
        .then(admin => res.render('edit', {
            users: mongooseToObject(admin)
        }))
        .catch(error => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });
});

app.put('/manager/:id', (req, res, next) => {
    User.updateOne({ _id: req.params.id }, req.body)
        .then(() => {
            res.redirect('/admin');
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });
});

app.get('/user', (req, res) => {
    AccountModel.find({})
        .then(accounts => {
            res.render('main', {
                users: multipleMongooseToObject(accounts)
            })
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });
});

app.delete('/user/:_id', (req, res) => {
    const userId = req.params._id;

    // Xóa người dùng từ cơ sở dữ liệu
    AccountModel.findByIdAndRemove(userId)
        .then(() => {
            console.log('ádsadsd');
            res.sendStatus(200);
        })
        .catch(error => {
            console.error('Lỗi khi xóa người dùng:', error);
            res.sendStatus(500);
        });
});

app.delete('/admin/:_id', (req, res) => {
    const customerId = req.params._id;

    // Xóa đơn hàng từ cơ sở dữ liệu
    User.findByIdAndRemove(customerId)
        .then(() => {
            console.log('ádsadsd');
            res.sendStatus(200);
        })
        .catch(error => {
            console.error('Lỗi khi xóa người dùng:', error);
            res.sendStatus(500); // Gửi phản hồi lỗi nếu cần thiết
        });
});


app.post('/home', (req, res, next) => {
    var username = req.body.username;
    var email = req.body.email;
    var numberphone = req.body.numberphone;
    var address = req.body.address;
    var time = req.body.time;
    var payment = req.body.payment;
    // Check if the username is already in use
    User.findOne({
        username: username
    }).then(existingUser => {
        if (existingUser) {
            res.json("Tài khoản đã có người sử dụng");
        } else {
            // Create a new account
            return User.create({
                username: username,
                email: email,
                numberphone: numberphone,
                address: address,
                time: time,
                payment: payment,
                role: "user"
            });
        }
    }).then(newAccount => {
        if (newAccount) {
            res.json("Tạo tài khoản thành công");
        }
    }).catch(err => {
        res.status(500).json("Lỗi khi tạo tài khoản");
    });
});



app.post('/register', (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;

    // Check if the username is already in use
    AccountModel.findOne({ username: username })
        .then(existingUser => {
            if (existingUser) {
                res.json({ error: "Tài khoản đã có người sử dụng" });
            } else {
                // Create a new account
                return AccountModel.create({
                    username: username,
                    password: password,
                    role: "user"
                });
            }
        })
        .then(newAccount => {
            if (newAccount) {
                res.json({ message: "Tạo tài khoản thành công" });
            }
        })
        .catch(err => {
            res.status(500).json({ error: "Lỗi khi tạo tài khoản" });
        });
});

app.post('/login', (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;
    AccountModel.findOne({
        username: username,
        password: password
    })
        .then(data => {
            if (data) {
                var token = jwt.sign({
                    _id: data._id
                }, 'mk');
                return res.json({
                    message: 'thành công',
                    token: token
                })
            } else {
                res.status(300).json("Đăng nhập thất bại")
            }
        })
        .catch(err => {
            res.status(500).json("loi ben server");
        })
})

app.get('/login', (req, res) => {
    var duongDanFile = path.join(__dirname, 'login.html')
    res.sendFile(duongDanFile)
})

app.get('/register', (req, res) => {
    var duongDanFile = path.join(__dirname, 'register.html')
    res.sendFile(duongDanFile)
})

var checkLogin = (req, res, next) => {
    try {
        var token = req.cookies.token;
        var idUser = jwt.verify(token, 'mk');
        AccountModel.findOne({
            _id: idUser
        })
            .then(data => {
                if (data) {
                    req.data = data;
                    next();
                } else {
                    res.status(401).json('not permitted'); // Change the status to 401 Unauthorized
                }
            })
            .catch(err => {
                res.status(500).json('Internal Server Error'); // Change the error message
            });
    } catch (err) {
        res.status(500).json('You must login'); // Change the error message
    }
};
var checkUser = (req, res, next) => {
    var role = req.data.role;
    if (role === 'user') {
        res.redirect('/home')
    } else {
        next();
    }
};
var checkAdmin = (req, res, next) => {
    var role = req.data.role;
    if (role === 'admin') {
        next();
    } else {
        res.json("not authen")
    }
};

app.get('/home', checkLogin, (req, res) => {
    var duongDanFile = path.join(__dirname, 'index.html');
    res.sendFile(duongDanFile);
});

app.get('/statistical', checkLogin, (req, res) => {
    // var duongDanFile = path.join(__dirname, 'statistical.html');
    // res.sendFile(duongDanFile);
    res.render('statistical')
});
// app.get('/admin', checkLogin, (req, res) => {
//     var duongDanFile = path.join(__dirname, 'main', 'admin.hbs');
//     res.sendFile(duongDanFile);
// })
app.get('/admin', checkLogin, checkUser, checkAdmin, (req, res) => {
    User.find({})
        .then(accounts => {
            res.render('admin', {
                users: multipleMongooseToObject(accounts)
            })
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})