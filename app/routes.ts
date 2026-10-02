import { route, type RouteConfig, index } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("service", "routes/service.tsx"),
	route("about", "routes/about.tsx"),
	route("contact", "routes/contact.tsx")
] satisfies RouteConfig;
