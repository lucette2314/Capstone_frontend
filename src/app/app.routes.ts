import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },  
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {     
    path: 'aboutus',
    loadComponent: () =>
    import('./components/aboutus/aboutus.component').then((m) => m.AboutusComponent),
  },
  {
    path: 'drink',
    loadComponent: () =>
    import('./components/drink/drink.component').then((m) => m.DrinkComponent),
  },
  {
    path: 'food',
    loadComponent: () =>
    import('./components/food/food.component').then((m) => m.FoodComponent),
  },
  {
    path: 'offers',
    loadComponent: () =>
    import('./components/offers/offers.component').then((m) => m.OffersComponent),
  },
  {
    path: 'reviews',
    loadComponent: () =>
    import('./components/reviews/reviews.component').then((m) => m.ReviewsComponent),
  },
  {
    path: 'contactus',
    loadComponent: () =>
    import('./components/contactus/contactus.component').then((m) => m.ContactusComponent),
  },
  { 
  path: 'checkout', 
  loadComponent: () =>
  import('./components/checkoutpage/checkoutpage.component').then((m) => m.CheckoutpageComponent),
  },
  { 
    path: 'placeorder', 
    loadComponent: () =>
    import('./components/placeorder/placeorder.component').then((m) => m.PlaceorderComponent),
    },
];
