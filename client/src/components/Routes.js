import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import Cart from './Cart'
import Orders from './Orders'
import AdminDashboard from './AdminDashboard'
import AddItem from './AddItem'
import ViewSales from './ViewSales'
import ViewItems from './ViewItems'
import ReviewItem from './ReviewItem'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/cart" component={Cart} />
            <Route path="/orders" component={Orders} />
            <Route path="/admin/dashboard" component={AdminDashboard} />
            <Route path="/admin/add-item" component={AddItem} />
            <Route path="/admin/view-sales" component={ViewSales} />
            <Route path="/items" component={ViewItems} />
            <Route path="/items/:id/review" component={ReviewItem} />
        </Switch>
    )
}

export default Routes