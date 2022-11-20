<h1 align="center">Go Links</h1>
<p align="center">A self hosted Go Link solution for your organization.</p>

<!-- Build and deploy error/success -->

## :bulb: What are Go Links?
Go Links are a type of URL shortening system. They are used by a lot of company like Google, Netflix and Stripe. They simplify long and messy URLs into short and clean links any human can easily remember.

Go Links are tipically private to the organization. This meaning that a user need to sign in or be on a secure network to use it.

## :milky_way: How can I use Go Links?
Go Links are not a simple url shortening system, like bit.ly, but is a productivity tool that allow teams access and share resources.
You can access your metrics dashbord with only <b>go/metrics</b>, see your ticket board with <b>go/tickets</b> or comment a pull request by only referring <b>go/java</b> for sharing yours language guidelines.

## :mag: Why this repo? 
This repository was created to allow everyone to use Go Links without extra costs.

## :notebook_with_decorative_cover: How use it?
In this repo there are 3 projects.
- **Portal:** Dashboard to manage the go/links. Actually you could search it with a full text search.
- **Api:** Rest API with CRUD endpoint and a search endpoint for extract Go Links information. It uses ElasticSearch for storage for full text property. You could map this API to host 'go' for use it.
- **Browser Extension:** If you don't want map API host into DNS, users of your organization need to install it. It intercept the http request and redirect to the correct link when a go/link is required.

## :memo: Changelog

TBD


## :pencil2: Contributing

TBD

## :calendar: Roadmap

TBD

## :page_with_curl: License

TBD
