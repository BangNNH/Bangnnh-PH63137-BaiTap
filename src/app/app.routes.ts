import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';
import { Stories } from "./pages/stories/stories";
import { AddStory } from './pages/add-story/add-story';
import { Lab4AddProduct } from './pages/lab4-add-product/lab4-add-product';
import { Lab4Register } from './pages/lab4-register/lab4-register';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'about',
        component: About
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: 'products',
        component: Products
    }, {
        path: "stories",
        component: Stories
    },
    {
        path: "add-story",
        component: AddStory
    },
    {
        path: "lab4-add-product",
        component: Lab4AddProduct
    },
    {
        path: "lab4-register",
        component: Lab4Register
    },
];
