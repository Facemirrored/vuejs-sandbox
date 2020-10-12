import Ex6app from "@/components/chapters/ex6serverComponents/Ex6app";
import Home from "@/Home.vue"
import Ex7app from "@/components/chapters/ex7userComponentProps/server/Ex7app";
import Ex8app from "@/components/chapters/ex8scopes/Ex8app";
import WonderfulQuotesApp from "@/components/chapters/ex9wonderfulQuotes/WonderfulQuotesApp";
import Ex10FormsApp from "@/components/chapters/ex10Forms/Ex10FormsApp";
import Ex11CustomDirectivesApp from "@/components/chapters/ex11CustomDirectives/Ex11CustomDirectivesApp";
import Ex12FiltersMixinsApp from "@/components/chapters/ex12FiltersMixins/Ex12FiltersMixinsApp";
import Ex13app from "@/components/chapters/ex13Transitions/Ex13app";
import Ex14app from "@/components/chapters/ex14vueResource/Ex14app";
import Ex15Routing from "@/components/chapters/ex15RouterStuff/Ex15Routing";
import User from "@/components/chapters/ex15RouterStuff/User";

export const routes = [
    {path: "", component: Home},
    {path: "/ex6server_components", component: Ex6app},
    {path: "/ex7user_component_props", component: Ex7app},
    {path: "/ex8scopes", component: Ex8app},
    {path: "/ex9wunderfulQuotes", component: WonderfulQuotesApp},
    {path: "/ex10forms", component: Ex10FormsApp},
    {path: "/ex11custom_directives", component: Ex11CustomDirectivesApp},
    {path: "/ex12filters_mixins", component: Ex12FiltersMixinsApp},
    {path: "/ex13transitions", component: Ex13app},
    {path: "/ex14vue_resource", component: Ex14app},
    {path: "/ex15router_stuff", component: Ex15Routing},
    {path: "/ex15router_stuff/user/:id", component: User}
];