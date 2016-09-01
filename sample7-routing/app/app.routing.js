"use strict";
var router_1 = require('@angular/router');
var phones_component_1 = require('./phones.component');
var dashboard_component_1 = require('./dashboard.component');
var phone_detail_component_1 = require('./phone-detail.component');
var appRoutes = [
    {
        path: 'phones',
        component: phones_component_1.PhonesComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: phone_detail_component_1.PhoneDetailComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map