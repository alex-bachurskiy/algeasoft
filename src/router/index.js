import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from "../views/home";
import about from "../views/about";
import ai from "../views/ai";
import cases from "../views/cases";
import contacts from "../views/contacts";
import cpu from "../views/cpu";
import customization from "../views/customization";
import fpga from "../views/fpga";
import gpu from "../views/gpu";
import question from "../views/question";
import server from "../views/server";
import services from "../views/services";
import support from "../views/support";

export default new Router ({
	routes: [
		{
			path: '/',
			component: home
		},
		{
			path: '/about',
			component: about
		},
		{
			path: '/technical-support',
			component: support
		},
		{
			path: '/cases',
			component: cases
		},
		{
			path: '/questions_and_answers',
			component: question
		},
		{
			path: '/contacts',
			component: contacts
		},
		{
			path: '/ai_systems_development',
			component: ai
		},
		{
			path: '/gpu',
			component: gpu
		},
		{
			path: '/sowtware_installation_and_configuration',
			component: customization
		},
		{
			path: 'cloud_servers_with_cpu',
			component: cpu
		},
		{
			path: '/fpga_based_vds',
			component: fpga
		},
		{
			path: '/server_placement',
			component: server
		},
		{
			path: '/fpga_based_vds',
			component: fpga
		},
		{
			path: '/services',
			component: services
		},
	]
})