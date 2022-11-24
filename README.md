<h1 align="center">Go Links</h1>
<p align="center">A self hosted Go Link solution for your organization.</p>

<!-- Build and deploy error/success -->

## :bulb: What are Go Links?
Go Links are a type of URL shortening system. They are used by a lot of company like Google, Netflix and Stripe. They simplify long and messy URLs into short and clean links any human can easily remember.

Go Links are tipically private to the organization. This meaning that a user need to sign in or be on a secure network to use it.

## :milky_way: How can I use Go Links?
Go Links are not a simple url shortening system, like bit.ly, but is a productivity tool that allow teams access and share resources.
You can access your metrics dashbord with only <b>go/metrics</b>, see your ticket board with <b>go/tickets</b> or comment a pull request by only referring <b>go/java</b> for sharing yours language guidelines.

## :microscope: Project Structure

This repository was created to share knowledge and allow everyone to use Go Links without extra costs.
It provides:
- **portal:** [Nx Monorepo](https://nx.dev/more-concepts/why-monorepos) for the dashboard.
- **api:** [.NET6 Web Api](https://dotnet.microsoft.com/en-us/apps/aspnet/apis) project.
- **browser-extension:** Simple javascript project for Chrome extension.

You can check a [live demo](https://go-links-dashboard.vercel.app/) of the dashboard here.

To test the redirect with the browser-extension you need to download the folder **browser-extension**, go to Chrome > Type chrome://extensions/ > Enable Developer Mode > Click "Load unpacked extension" and select the browser-extension folder. 
Now you can type "go/{link}" (check the dashboard for available link) and you will be redirect to the page.

## :memo: Changelog

TBD


## :pencil2: Contributing

TBD

## :calendar: Roadmap

TBD

## :page_with_curl: License

TBD
