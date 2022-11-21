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
This repository was created to share knowledge and allow everyone to use Go Links without extra costs.
It provides:

- **Dashboard**: Dashboard to explore available go/links.
- **Browser Extension**: If you don't want to edit your DNS configurations, people of your organization need to install the extension. It intercept the http request and redirect to the correct link when a go/link is required.
- **Api:** Rest API with CRUD endpoint and a search endpoint for extract Go Links information. It uses ElasticSearch for storage. You could map this API to host 'go' for use it without the browser extension.

## :microscope: Project Structure

The project is divide in two macro-part.
- **portal**
- **api**

Inside the `portal` folder there are the `dashboard` and `browser-extension`. The project is a [Nx Monorepo](https://nx.dev/more-concepts/why-monorepos).
Inside the `api` folder there are [.NET6 Web Api](https://dotnet.microsoft.com/en-us/apps/aspnet/apis) project.

You can check a [live demo](https://go-links-dashboard.vercel.app/) of the dashboard

## :memo: Changelog

TBD


## :pencil2: Contributing

TBD

## :calendar: Roadmap

TBD

## :page_with_curl: License

TBD
