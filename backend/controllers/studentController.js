const db = require("../../db");
const bcrypt = require("bcrypt");
exports.register = async (req, res) => {

    const { name, email, password } = req.body;

    try {

        const hashedPassword = await bcrypt.hash(password, 10);

        const sql =
            "INSERT INTO students(name,email,password) VALUES(?,?,?)";

        db.query(sql, [name, email, hashedPassword], (err, result) => {

            if (err) {

                return res.status(500).json({
                    message: "Registration Failed"
                });

            }

            res.json({
                message: "Registration Successful"
            });

        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }

};
exports.login = async (req, res) => {

    const { email, password } = req.body;

    console.log("Email Received:", email);
    console.log("Password Received:", password);

    const sql = "SELECT * FROM students WHERE email=?";

    db.query(sql, [email], async (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({
                message: err.message
            });
        }

        console.log("Query Result:", result);

        if (result.length === 0) {

    return res.status(401).json({
        message: "Invalid Email or Password"
    });

}

const user = result[0];

const match = await bcrypt.compare(password, user.password);

if (match) {

    res.json({
        message: "Login Successful"
    });

} else {

    res.status(401).json({
        message: "Invalid Email or Password"
    });

}

    });


};
exports.getResources = (req, res) => {

    const sql = "SELECT * FROM resources";

    db.query(sql, (err, result) => {

        if(err){
            return res.status(500).json({
                message: "Failed to fetch resources"
            });
        }

        res.json(result);

    });

};
exports.addResource = (req, res) => {

    const { title, subject, link } = req.body;

    const sql =
        "INSERT INTO resources(title,subject,link) VALUES(?,?,?)";

    db.query(sql, [title, subject, link], (err, result) => {

        if (err) {

            return res.status(500).json({
                message: "Failed to add resource"
            });

        }

        res.json({
            message: "Resource Added Successfully"
        });

    });

};
exports.updateResource = (req, res) => {

    const { id } = req.params;

    const { title, subject, link } = req.body;

    const sql =
        "UPDATE resources SET title=?, subject=?, link=? WHERE id=?";

    db.query(sql, [title, subject, link, id], (err, result) => {

        if (err) {

            return res.status(500).json({
                message: "Update Failed"
            });

        }

        res.json({
            message: "Resource Updated Successfully"
        });

    });

};
exports.deleteResource = (req, res) => {

    const { id } = req.params;

    const sql = "DELETE FROM resources WHERE id=?";

    db.query(sql, [id], (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Delete Failed"
            });
        }

        res.json({
            message: "Resource Deleted Successfully"
        });

    });

};
exports.getBooks = (req, res) => {

    const sql = "SELECT * FROM books";

    db.query(sql, (err, result) => {

        if (err) {

            return res.status(500).json({
                message: "Failed to fetch books"
            });

        }

        res.json(result);

    });

};
exports.addBook = (req, res) => {

    const { title, author, subject, link } = req.body;

    const sql =
        "INSERT INTO books(title,author,subject,link) VALUES(?,?,?,?)";

    db.query(sql,[title,author,subject,link],(err,result)=>{

        if(err){

            return res.status(500).json({
                message:"Failed to add book"
            });

        }

        res.json({
            message:"Book Added Successfully"
        });

    });

};
exports.updateBook = (req,res)=>{

    const {id}=req.params;

    const {title,author,subject,link}=req.body;

    const sql=
    "UPDATE books SET title=?,author=?,subject=?,link=? WHERE id=?";

    db.query(sql,[title,author,subject,link,id],(err,result)=>{

        if(err){

            return res.status(500).json({
                message:"Update Failed"
            });

        }

        res.json({
            message:"Book Updated Successfully"
        });

    });

};
exports.deleteBook=(req,res)=>{

    const {id}=req.params;

    const sql="DELETE FROM books WHERE id=?";

    db.query(sql,[id],(err,result)=>{

        if(err){

            return res.status(500).json({
                message:"Delete Failed"
            });

        }

        res.json({
            message:"Book Deleted Successfully"
        });

    });

};
// ================= BOOKMARKS =================

// Get Bookmarks
exports.getBookmarks = (req, res) => {

    const sql = "SELECT * FROM bookmarks";

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Failed to fetch bookmarks"
            });
        }

        res.json(result);

    });

};

// Add Bookmark
exports.addBookmark = (req, res) => {

    const { title, category, link } = req.body;

    const sql =
        "INSERT INTO bookmarks(title,category,link) VALUES(?,?,?)";

    db.query(sql, [title, category, link], (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Failed to add bookmark"
            });
        }

        res.json({
            message: "Bookmark Added Successfully"
        });

    });

};

// Update Bookmark
exports.updateBookmark = (req, res) => {

    const { id } = req.params;

    const { title, category, link } = req.body;

    const sql =
        "UPDATE bookmarks SET title=?, category=?, link=? WHERE id=?";

    db.query(sql, [title, category, link, id], (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Update Failed"
            });
        }

        res.json({
            message: "Bookmark Updated Successfully"
        });

    });

};

// Delete Bookmark
exports.deleteBookmark = (req, res) => {

    const { id } = req.params;

    const sql = "DELETE FROM bookmarks WHERE id=?";

    db.query(sql, [id], (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Delete Failed"
            });
        }

        res.json({
            message: "Bookmark Deleted Successfully"
        });

    });

};
// ================= SCHOLARSHIPS =================

// Get Scholarships
exports.getScholarships = (req, res) => {

    const sql = "SELECT * FROM scholarships";

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Failed to fetch scholarships"
            });
        }

        res.json(result);

    });

};

// Add Scholarship
exports.addScholarship = (req, res) => {

    const { name, provider, link } = req.body;

    const sql =
        "INSERT INTO scholarships(name,provider,link) VALUES(?,?,?)";

    db.query(sql, [name, provider, link], (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Failed to add scholarship"
            });
        }

        res.json({
            message: "Scholarship Added Successfully"
        });

    });

};

// Update Scholarship
exports.updateScholarship = (req, res) => {

    const { id } = req.params;

    const { name, provider, link } = req.body;

    const sql =
        "UPDATE scholarships SET name=?, provider=?, link=? WHERE id=?";

    db.query(sql, [name, provider, link, id], (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Update Failed"
            });
        }

        res.json({
            message: "Scholarship Updated Successfully"
        });

    });

};

// Delete Scholarship
exports.deleteScholarship = (req, res) => {

    const { id } = req.params;

    const sql = "DELETE FROM scholarships WHERE id=?";

    db.query(sql, [id], (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Delete Failed"
            });
        }

        res.json({
            message: "Scholarship Deleted Successfully"
        });

    });

};
// ================= INTERNSHIPS =================

// Get Internships
exports.getInternships = (req, res) => {

    const sql = "SELECT * FROM internships";

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Failed to fetch internships"
            });
        }

        res.json(result);

    });

};

// Add Internship
exports.addInternship = (req, res) => {

    const { company, role, location, link } = req.body;

    const sql =
        "INSERT INTO internships(company,role,location,link) VALUES(?,?,?,?)";

    db.query(sql, [company, role, location, link], (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Failed to add internship"
            });
        }

        res.json({
            message: "Internship Added Successfully"
        });

    });

};

// Update Internship
exports.updateInternship = (req, res) => {

    const { id } = req.params;

    const { company, role, location, link } = req.body;

    const sql =
        "UPDATE internships SET company=?, role=?, location=?, link=? WHERE id=?";

    db.query(sql, [company, role, location, link, id], (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Update Failed"
            });
        }

        res.json({
            message: "Internship Updated Successfully"
        });

    });

};

// Delete Internship
exports.deleteInternship = (req, res) => {

    const { id } = req.params;

    const sql = "DELETE FROM internships WHERE id=?";

    db.query(sql, [id], (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Delete Failed"
            });
        }

        res.json({
            message: "Internship Deleted Successfully"
        });

    });

};