// vaishnav srivstava is a evil but kind hearted so
// You have some manner so please respect the perspective of the other person . Just understand the perspective of the other person
//Phase 2 ki beginning se pehle yehh jaroori hain ki apne code ko ek barr is me likh lo
//data.js ki file sahi hian
//index.js ki jo file hain usme changes hain pata b=nhi but is particular staage pe yeh yaha pe aise hain

//const mongoose = require("mongoose");
// const initData = require("./data.js");
// const Listing = require("./models/listing.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// main()
//   .then(() => {
//     console.log("Connected to DB");
//     initDB();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function main() {
//   await mongoose.connect(MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// }

// // const initDB = async () => {
// //   try {
// //     await Listing.deleteMany({});
// //     await Listing.insertMany(initData.data);
// //     console.log("Data was initialized");
// //   } catch (error) {
// //     console.error("Error initializing data:", error.message);
// //   } finally {
// //     mongoose.disconnect(); // Close the connection after initializing data
// //   }
// // };

// const initDB = async () => {
//   await Listing.deleteMany({});
//   await Listing.insertMany(initData.data);
//   console.log("data was initialized");
// };

// initDB();

//Chalo phir dekte hain ki aage ki kya dikkat hain , ab dekhu to usme kya jaroorat hain
// models-> listing.js

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const listingSchema = new Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: String,
//   image: {
//     type: String,
//     default:
//       "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     set: (v) =>
//       v === ""
//         ? "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
//         : v,
//   },
//   price: Number,
//   location: String,
//   country: String,
// });

// const Listing = mongoose.model("Listing", listingSchema);
// module.exports = Listing;

//
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const listingSchema = new Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: String,
//   image: {
//     type: String,
//     default:
//       "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     set: (v) =>
//       v === ""
//         ? "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
//         : v,
//   },
//   price: Number,
//   location: String,
//   country: String,
// });

// const Listing = mongoose.model("Listing", listingSchema);
// module.exports = Listing;

//public -> css ->  style.css;;

// body {
//     font-family: "Plus Jakarta Sans", sans-serif !important;
//     display: flex;
//     flex-direction: column;
//     min-height: 100vh;
//   }

//   .container {
//     flex: 1;
//   }

//   /* Navbar */

//   .navbar {
//     height: 5rem;
//     background-color: white;
//   }

//   .fa-compass {
//     color: #fe424d;
//     font-size: 2rem;
//   }

//   .nav-link {
//     color: #222222 !important;
//   }

//   /* Footer */
//   .f-info-links a {
//     text-decoration: none;
//     color: #222222;
//   }

//   .f-info-links a:hover {
//     text-decoration: underline;
//   }

//   .f-info-links,
//   .f-info-socials,
//   .f-info-brand {
//     width: 100%;
//     display: flex;
//     align-items: center;
//     vertical-align: middle;
//     justify-content: center;
//   }

//   .f-info-socials i {
//     font-size: 1.2rem;
//     margin-right: 10px; /* Increase margin-right for spacing */
//     margin-left: 10px;
//   }

//   .f-info {
//     text-align: center;
//     height: auto;
//     background-color: #ebebeb;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     align-items: space-evenly;
//   }

//   /* cards
//    */
//   .card {
//     border: none !important;
//     margin-bottom: 2rem;
//   }

//   .card-img-top {
//     border-radius: 1rem !important;
//     width: 100% !important;
//     object-fit: cover !important;
//   }

//   .card-body {
//     padding: 0 !important;
//   }

//   .card-text p {
//     font-weight: 400;
//   }

//   .listing-link {
//     text-decoration: none;
//   }

//   /* Card Effect */

//   .card-img-overlay {
//     opacity: 0;
//   }

//   .card-img-overlay:hover {
//     opacity: 0.2;
//     background-color: white;
//   }

//   .add-btn {
//     background-color: #fe424d !important;
//     border: none !important;
//   }

//   /* Edit Page */
//   .edit-btn {
//     background-color: #fe424d !important;
//     border: none !important;
//   }

//   /* Show Page */

//   .show-img {
//     height: 30vh;
//     /* width: ; */
//   }

//script.js file hain public me

// Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//     "use strict";

//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.querySelectorAll(".needs-validation");

//     // Loop over them and prevent submission
//     Array.prototype.slice.call(forms).forEach(function (form) {
//       form.addEventListener(
//         "submit",
//         function (event) {
//           if (!form.checkValidity()) {
//             event.preventDefault();
//             event.stopPropagation();
//           }

//           form.classList.add("was-validated");
//         },
//         false
//       );
//     });
//   })();

//util file hain
// class ExpressError extends Error {
//     constructor(statusCode, message) {
//       super();
//       this.statusCode = statusCode;
//       this.message = message;
//     }
//   }

//   module.exports = ExpressError;
// class ExpressError extends Error {
//     constructor(statusCode, message) {
//       super();
//       this.statusCode = statusCode;
//       this.message = message;
//     }
//   }

//   module.exports = ExpressError;

// module.exports = (fn) => {
//     return (req, res, next) => {
//       fn(req, res, next).catch(next);
//     };
//   };

//app.js ki  file hain
//const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const Listing = require("./models/listings.js");
// const path = require("path");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const wrapAsync = require("./utils/wrapAsync.js");
// const ExpressError = require("./utils/ExpressError.js");
// const { listingScheme, listingSchema } = require("./schema.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// main()
//   .then(() => {
//     console.log("connected to DB");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function main() {
//   await mongoose.connect(MONGO_URL);
// }

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));
// app.engine("ejs", ejsMate);
// app.use(express.static(path.join(__dirname, "/public")));

// app.get("/", (req, res) => {
//   res.send("Hi, I am root");
// });

// const validateListing = (req, res, next) => {
//   let { error } = listingSchema.validate(req.body);
//   if (error) {
//     let errMsg = error.details.map((el) => el.message).join(",");
//     throw new ExpressError(400, errMsg);
//   } else {
//     next();
//   }
// };
// //Index Route
// app.get(
//   "/listings",
//   wrapAsync(async (req, res) => {
//     const allListings = await Listing.find({});
//     res.render("listings/index", { allListings });
//   })
// );

// //New Route
// app.get("/listings/new", (req, res) => {
//   res.render("listings/new");
// });

// //Show Route
// app.get(
//   "/listings/:id",
//   wrapAsync(async (req, res) => {
//     let { id } = req.params;
//     const listing = await Listing.findById(id);
//     res.render("listings/show", { listing });
//   })
// );

// //Create Route
// app.post(
//   "/listings",
//   validateListing,
//   wrapAsync(async (req, res, next) => {
//     const newListing = new Listing(req.body.listing);
//     await newListing.save();
//     res.redirect("/listings");
//   })
// );

// //Edit Route
// app.get(
//   "/listings/:id/edit",
//   wrapAsync(async (req, res) => {
//     let { id } = req.params;
//     const listing = await Listing.findById(id);
//     res.render("listings/edit", { listing });
//   })
// );

// //Update Route
// app.put(
//   "/listings/:id",
//   validateListing,
//   wrapAsync(async (req, res) => {
//     let { id } = req.params;
//     await Listing.findByIdAndUpdate(id, { ...req.body.listing });
//     res.redirect(`/listings/${id}`);
//   })
// );

// //Delete Route
// app.delete(
//   "/listings/:id",
//   wrapAsync(async (req, res) => {
//     let { id } = req.params;
//     let deletedListing = await Listing.findByIdAndDelete(id);
//     console.log(deletedListing);
//     res.redirect("/listings");
//   })
// );

// // app.get("/testListing", async (req, res) => {
// //   let sampleListing = new Listing({
// //     title: "My New Villa",
// //     description: "By the beach",
// //     price: 1200,
// //     location: "Calangute, Goa",
// //     country: "India",
// //   });

// //   await sampleListing.save();
// //   console.log("sample was saved");
// //   res.send("successful testing");
// // });

// app.all("*", (req, res, next) => {
//   next(new ExpressError(404, "Page Not Found"));
// });

// app.use((err, req, res, next) => {
//   let { statusCode = 500, message = "Something went wrong! " } = err;
//   res.status(statusCode).render("error.ejs", { message });
//   res.render("error.ejs", { message });
//   // res.status(statusCode).send(message);
// });

// app.listen(8080, () => {
//   console.log("server is listening to port 8080");
// });

//schema .js file yeh last file hain
// const Joi = require("joi");

// module.exports.listingSchema = Joi.object({
//   listing: Joi.object({
//     title: Joi.string().required(),
//     description: Joi.string().required(),
//     location: Joi.string().required(),
//     country: Joi.string().required(),
//     price: Joi.number().required().min(0),
//     image: Joi.string().allow("", null),
//   }),
// });
