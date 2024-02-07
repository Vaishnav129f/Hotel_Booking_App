// // // Initialize a new Node.js project
// // // Assuming you meant 'npm init -y' instead of 'hpm init -y'
// // npm init -y

// // // Install 'express' and 'mongoose' packages
// // npm install express mongoose

// // // Create an 'app.js' file
// // touch app.js

// // // Import required modules and set up Express app
// // const express = require('express');
// // const mongoose = require('mongoose');

// // const app = express();

// // // Connect to MongoDB (replace 'yourDatabaseName' with the actual database name)
// // const MONGO_URL = 'mongodb://127.0.0.1:27017/yourDatabaseName';

// // mongoose.connect(MONGO_URL, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });

// // // Check MongoDB connection
// // const db = mongoose.connection;
// // db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// // db.once('open', () => {
// //   console.log('Connected to MongoDB');
// //   // Additional logic can go here
// // });

// // // Set up a basic route
// // app.get('/', (req, res) => {
// //   res.send('Hi, I am root');
// // });

// // // Start the Express server
// // const PORT = 8080;
// // app.listen(PORT, () => {
// //   console.log(`Server is listening on port ${PORT}`);
// // });

// // Lecture 2
// // Model : Listing-->place

// // • title

// // • description

// // • image

// // • price

// // • location

// // • country

// ///Edit .ejs

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Wanderlust</title>
//   </head>
//   <body>
//     <h3>Edit your Listing</h3>
//     <form method="POST" action="/listings/<%= listing._id %>?_method=PUT">
//       <input name="listing[title]" value="<%= listing.title %>" type="text" />
//       <br /><br />
//       <textarea name="listing[description]">
//             <%= listing.description %></textarea
//       >
//       <br /><br />
//       <input name="listing[image]" value="<%= listing.image %>" type="text" />
//       <br /><br />
//       <input name="listing[price]" value="<%= listing.price %>" type="number" />
//       <br /><br />
//       <input
//         name="listing[country]"
//         value="<%= listing.country %>"
//         type="text"
//       />
//       <br /><br />
//       <input
//         name="listing[location]"
//         value="<%= listing.location %>"
//         type="text"
//       />
//       <br /><br />
//       <button>Edit</button>
//     </form>
//   </body>
// </html>

// //index.ejs

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>WanderLust</title>
//   </head>
//   <body>
//     <h3>All Listings</h3>
//     <form method="get" action="/listings/new">
//       <button>Create New Listing</button>
//     </form>
//     <ul>
//       <% for(let listing of allListings) { %>
//       <li><a href="/listings/<%= listing._id %>"><%= listing.title %></a></li>
//       <% } %>
//     </ul>
//   </body>
// </html>

// //new.ejs

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>WanderLust</title>
//   </head>
//   <body>
//     <h3>Create a New Listing</h3>
//     <form method="post" action="/listings">
//       <input name="listing[title]" placeholder="enter title" type="text" />
//       <br /><br />
//       <textarea
//         name="listing[description]"
//         placeholder="Enter description"
//         type="text"
//       ></textarea>

//       <br /><br />
//       <input
//         name="listing[image]"
//         placeholder="enter image URL/link"
//         type="text"
//       />
//       <br /><br />
//       <input name="listing[price]" placeholder="enter price" type="number" />
//       <br /><br />
//       <input name="listing[country]" placeholder="enter country" type="text" />
//       <br /><br />
//       <input
//         name="listing[location]"
//         placeholder="enter location"
//         type="text"
//       />
//       <br /><br />
//       <button type="submit">Add</button>
//     </form>
//   </body>
// </html>

// {/* show.ejs */}

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Wanderlust</title>
//   </head>
//   <body>
//     <h3>Listing Details</h3>

//     <ul>
//       <li><%= listing.title %></li>
//       <li><%= listing.description %></li>
//       <li>&#8377; <%= listing.price.toLocaleString("en-IN") %></li>
//       <li><%= listing.location %></li>
//       <li><%= listing.country %></li>
//     </ul>

//     <br />
//     <a href="/listings/<%= listing._id %> /edit">Edit this Listing</a>
//     <br /><br />

//     <form method="POST" action="/listings.<%=listing._id%>?_method=DELETE">
//       <button>Delete this listing</button>
//     </form>
//   </body>
// </html>

// //app.js
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");

// const Listing = require("./models/listings.js");
// const path = require("path");
// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
// const methodOverride = require("method-override");
// app.use(methodOverride("_method"));
// main()
//   .then(() => {
//     console.log("connected to DB");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// async function main() {
//   await mongoose.connect(MONGO_URL);
// }

// app.get("/", (req, res) => {
//   res.send("Hi, I am root");
// });

// //Index Route
// app.get("/listings", async (req, res) => {
//   const allListings = await Listing.find({});
//   res.render("listings/index.ejs", { allListings });
// });

// //New Route
// app.get("/listings/new", (req, res) => {
//   res.render("listings/new.ejs");
// });

// //Show Route

// app.get("/listings/:id", async (req, res) => {
//   let { id } = req.params;
//   const listing = await Listing.findById(id);
//   //   console.log(listing); // Corrected variable name
//   res.render("listings/show.ejs", { listing });
// });

// // Create Route
// app.post("/listings", async (req, res) => {
//   console.log(req.body);
//   const newListing = new Listing(req.body.listing);

//   await newListing.save();
//   //   console.log(listing);
//   res.redirect("/listings");
// });

// //Edit Route
// app.get("/listings/:id/edit", async (req, res) => {
//   let { id } = req.params;
//   const listing = await Listing.findById(id);
//   res.render("listings/edit.ejs", { listing });
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
//   res.redirect("/listngs");
// });

// // Create Route
// // app.post("/listings", async (req, res) => {
// //   console.log(req.body); // Log the entire request body
// //   const newListing = new Listing(req.body.listing);
// //   await newListing.save();
// //   res.redirect("/listings");
// // });

// // app.get("/listings", async (req, res) => {
// //   const allListings = await Listing.find({});
// //   res.render("/listings/index.ejs", { allListings });
// // });

// // app.get("/testListing", async (req, res) => {
// //   let sampleListing = new Listing({
// //     title: "My New Villa Home",
// //     description: "By the beach",
// //     price: 1200,
// //     location: "Calangute, Goa",
// //     country: "India",
// //   });
// //   await sampleListing.save();
// //   console.log("sample was saved");
// //   res.send("sucessful tesing");
// // });

// const PORT = 8080;
// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Wanderlust</title>
//   </head>
//   <body>
//     <h3>Edit your Listing</h3>
//     <form method="POST" action="/listings/<%= listing._id %>?_method=PUT">
//       <input name="listing[title]" value="<%= listing.title %>" type="text" />
//       <br /><br />
//       <textarea name="listing[description]">
// <%= listing.description %></textarea
//       >
//       <br /><br />
//       <input name="listing[image]" value="<%= listing.image %>" type="text" />
//       <br /><br />
//       <input name="listing[price]" value="<%= listing.price %>" type="number" />
//       <br /><br />
//       <input
//         name="listing[country]"
//         value="<%= listing.country %>"
//         type="text"
//       />
//       <br /><br />
//       <input
//         name="listing[location]"
//         value="<%= listing.location %>"
//         type="text"
//       />
//       <br /><br />
//       <button>Edit</button>
//     </form>
//   </body>
// </html>
// <% layout("/layouts/boilerplate") %>
// <body>
//   <h3>Listing Details :</h3>
//   <ul>
//     <li><%= listing.title %></li>
//     <li><%= listing.description %></li>
//     <li>&#8377; <%= listing.price.toLocaleString("en-IN") %></li>
//     <li><%= listing.location %></li>
//     <li><%= listing.country %></li>
//   </ul>
//   <br />
//   <a href="/listings/<%= listing._id %>/edit">Edit this Listing</a>
//   <br /><br />
//   <form method="POST" action="/listings/<%=listing._id%>?_method=DELETE">
//     <button>Delete this listing</button>
//   </form>
// </body>

// <% layout("/layouts/boilerplate") %>
// <div class="container">
//   <div class="row">
//     <div class="col-8 offset-2">
//       <h3>Listing Details</h3>
//     </div>

//     <div class="card col-6 offset-2">
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
//     </div>

//     <div class="row">
//       <div class="col">
//         <br />
//         <a href="/listings/<%= listing._id %>/edit" class="btn btn-danger"
//           >Edit
//         </a>
//       </div>
//     </div>
//     <div class="row">
//       <div class="col">
//         <br />
//         <form
//           method="POST"
//           action="/listings/<%= listing._id %>?_method=DELETE"
//         >
//           <button class="btn btn-dark">Delete</button>
//         </form>
//       </div>
//     </div>
//   </div>
// </div>
