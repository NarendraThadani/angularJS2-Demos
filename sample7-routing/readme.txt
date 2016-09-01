Routing.

Changes:
	Moved out code related to Phones in a seperate component.
	So now we have 2 components PhonesComponent and PhoneDetail	Component
	
	we'll use appComponent only for Routing (Navigation)
	
	
	seperated code, HTML and Styles for Each Component. (Properties: templateUrl and StyleUrls)
		note: styleUrls is an array.
		
	added routing related code in app.routing.ts file.
	
	Routing specifies all routes in an array.. (key value pair of Path and corresponding Component)
	e,g
	
	{
		path: 'dashboard',
		component: DashboardComponent
	}
	
	export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

	This routes array inside ModuleWithProviders "routing" ... needs to be provided to the app.module
  
  
	Also, Parameterized Paths are mentioned this way
	
	{
		path: 'detail/:id',
		component: PhoneDetailComponent
	}
  
  