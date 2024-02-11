// // init -index.js
// const mongoose = require("mongoose");
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

// //models -> listing.js
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

// //style.css
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

// //includes -> footer.ejs
// <footer>
//   <div class="f-info">
//     <div class="f-info-social">
//       <i class="fa-brands fa-square-facebook"></i>
//       <i class="fa-brands fa-square-instagram"></i>
//       <i class="fa-brands fa-linkedin"></i>

//       <div class="f-info-brand">&copy; WanderLust Private Limited</div>
//       <div class="f-info-links">
//         <a href="/privacy">Privacy</a>
//         <a href="/terms">Terms</a>
//       </div>
//     </div>
//   </div>
// </footer>

// //includes -> navbar.ejs
// <nav class="navbar navbar-expand-md bg-body-light border-bottom sticky-top">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="/"> <i class="fa-solid fa-compass"></i></a>
//     <button
//       class="navbar-toggler"
//       type="button"
//       data-bs-toggle="collapse"
//       data-bs-target="#navbarNavAltMarkup"
//     >
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//       <div class="navbar-nav">
//         <a class="nav-link" href="#">Home</a>
//         <a class="nav-link" href="/listings">All Listings</a>
//         <a class="nav-link" href="/listings/new">Add new Listing</a>
//       </div>
//     </div>
//   </div>
// </nav>

// // views -> layouts - > boilerplate.ejs
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>WanderLust</title>
//     <link rel="stylesheet" href="/css/style.css" />
//     <link
//       href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
//       rel="stylesheet"
//       integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
//       crossorigin="anonymous"
//     />
//     <link
//       rel="stylesheet"
//       href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
//       integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
//       crossorigin="anonymous"
//       referrerpolicy="no-referrer"
//     />
//     <link rel="preconnect" href="https://fonts.googleapis.com" />
//     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
//     <link
//       href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap"
//       rel="stylesheet"
//     />
//   </head>
//   <body>
//     <%- include("../includes/navbar.ejs") %>
//     <div class="container"><%-body %></div>
//     <%- include("../includes/footer.ejs") %>
//     <script
//       src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
//       integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
//       crossorigin="anonymous"
//     ></script>
//   </body>
// </html>

// //views -> listings ->edit.ejs
// <% layout("/layouts/boilerplate") %>

// <div class="row mt-3">
//   <div class="col-8 offset-2">
//     <br />
//     <h3>Edit your Listing</h3>

//     <form method="POST" action="/listings/<%= listing._id %>?_method=PUT">
//       <div class="mb-3">
//         <label for="title" class="form-label">Title</label>
//         <input
//           name="listing[title]"
//           value="<%= listing.title %>"
//           type="text"
//           class="form-control"
//         />
//       </div>

//       <div class="mb-3">
//         <label for="description" class="form-label">Description</label>
//         <textarea name="listing[description]" class="form-control">
// <%= listing.description %></textarea
//         >
//       </div>

//       <div class="mb-3">
//         <label for="image" class="form-label">Image Link</label>
//         <input
//           name="listing[image]"
//           value="<%= listing.image %>"
//           type="text"
//           class="form-control"
//         />
//       </div>

//       <div class="row">
//         <div class="mb-3 col-md-4">
//           <label for="price" class="form-label">Price</label>
//           <input
//             name="listing[price]"
//             value="<%= listing.price %>"
//             type="number"
//             class="form-control"
//           />
//         </div>

//         <div class="mb-3 col-md-8">
//           <label for="country" class="form-label">Country</label>
//           <input
//             name="listing[country]"
//             value="<%= listing.country %>"
//             type="text"
//             class="form-control"
//           />
//         </div>
//       </div>

//       <div class="mb-3">
//         <label for="location" class="form-label">Location</label>
//         <input
//           name="listing[location]"
//           value="<%= listing.location %>"
//           type="text"
//           class="form-control"
//         />
//       </div>

//       <button class="btn btn-dark edit-btn mt-3">Edit</button>
//       <br />
//     </form>
//     <br />
//   </div>
// </div>

// // views-> listings -> indexed.ejs
// <% layout("/layouts/boilerplate") %>

// <body>
//   <h3>All Listings</h3>
//   <!-- <form method="GET" action="/listings/new">
//     <button>Create New Listing</button>
//   </form> -->
//   <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
//     <% for(let listing of allListings) { %>
//       <a href="/listings/<%= listing._id %>" class="listing-link">

//         <div class="card col" style="width: 20rem">
//           <img src="<%= listing.image %>" class="card-img-top" alt="listing-image" style="height: 20rem;" />
//           <div class="card-img-overlay">ABC</div>
//           <div class="card-body">
//             <p class="card-text">
//              <b> <%= listing.title %> </b></br>
//               &#8377;
//               <%= listing.price.toLocaleString("en-IN") %> /night</br>
//             </p>
//           </div>
//         </div>
//       </a>

//       <% } %>
//   </div>

// </body>

// //new.ejs
// <% layout("/layouts/boilerplate") %>
// <div class="row">
//   <div class="col-8 offset-2">
//     <br />
//     <h3>Create a New Listing</h3>

//     <form method="POST" action="/listings" class="mb-3">
//       <div class="mb-3">
//         <label for="title" class="form-label">Title</label>
//         <input
//           name="listing[title]"
//           placeholder="Add a Catchy Title"
//           type="text"
//           class="form-control"
//         />
//       </div>

//       <div class="mb-3">
//         <label for="description" class="form-label">Description</label>
//         <textarea name="listing[description]" class="form-control"></textarea>
//       </div>

//       <div class="mb-3">
//         <label for="image" class="form-label">Image Link</label>
//         <input
//           name="listing[image]"
//           placeholder="enter image URL/Link"
//           type="text"
//           class="form-control"
//         />
//       </div>

//       <div class="row">
//         <div class="mb-3 col-md-4">
//           <label for="price" class="form-label">Price</label>
//           <input
//             name="listing[price]"
//             placeholder="1200"
//             type="number"
//             class="form-control"
//           />
//         </div>

//         <div class="mb-3 col-md-8">
//           <label for="country" class="form-label">Country</label>
//           <input
//             name="listing[country]"
//             placeholder="India"
//             type="text"
//             class="form-control"
//           />
//         </div>
//       </div>

//       <div class="mb-3">
//         <label for="location" class="form-label">Location</label>
//         <input
//           name="listing[location]"
//           placeholder="Jaipur , Rajasthan"
//           type="text"
//           class="form-control"
//         />
//       </div>

//       <button class="btn btn-dark">Add</button>
//       <br />
//     </form>
//     <br />
//   </div>
// </div>

// //show.ejs
// <% layout("/layouts/boilerplate") %>
// <div class="container">
//   <div class="row">
//     <div class="col-8 offset-2">
//       <h3>Listing Details</h3>
//     </div>

//     <div class="card col-6 offset-2 position-relative">
//       <img
//         src="<%= listing.image %>"
//         class="card-img-top show-img"
//         alt="listing-image"
//       />
//       <div class="card-body">
//         <p class="card-text">
//           <b><%= listing.title %></b> <br />
//           <%= listing.description %> <br />
//           <%= listing.price.toLocaleString("en-IN") %> <br />
//           <%= listing.location %> <br />
//           <%= listing.country %> <br />
//         </p>
//       </div>
//       <div class="position-absolute bottom-0 end-0">
//         <a
//           href="/listings/<%= listing._id %>/edit"
//           class="btn btn-dark edit-btn"
//           >Edit
//         </a>
//         <form
//           method="POST"
//           action="/listings/<%= listing._id %>?_method=DELETE"
//           style="display: inline"
//         >
//           <button class="btn btn-dark">Delete</button>
//         </form>
//       </div>
//     </div>
//   </div>
// </div>

// //app.js
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const Listing = require("./models/listings.js");
// const path = require("path");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");

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

// //Index Route
// app.get("/listings", async (req, res) => {
//   const allListings = await Listing.find({});
//   res.render("listings/index", { allListings });
// });

// //New Route
// app.get("/listings/new", (req, res) => {
//   res.render("listings/new");
// });

// //Show Route
// app.get("/listings/:id", async (req, res) => {
//   let { id } = req.params;
//   const listing = await Listing.findById(id);
//   res.render("listings/show", { listing });
// });

// //Create Route
// app.post("/listings", async (req, res) => {
//   const newListing = new Listing(req.body.listing);
//   await newListing.save();
//   res.redirect("/listings");
// });

// //Edit Route
// app.get("/listings/:id/edit", async (req, res) => {
//   let { id } = req.params;
//   const listing = await Listing.findById(id);
//   res.render("listings/edit", { listing });
// });

// //Update Route
// app.put("/listings/:id", async (req, res) => {
//   let { id } = req.params;
//   await Listing.findByIdAndUpdate(id, { ...req.body.listing });
//   res.redirect(`/listings/${id}`);
// });

// //Delete Route
// app.delete("/listings/:id", async (req, res) => {
//   let { id } = req.params;
//   let deletedListing = await Listing.findByIdAndDelete(id);
//   console.log(deletedListing);
//   res.redirect("/listings");
// });

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

// app.listen(8080, () => {
//   console.log("server is listening to port 8080");
// });
