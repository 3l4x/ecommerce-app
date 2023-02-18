import { Route } from 'react-router-dom'
import { routes } from '../constants/uiConstants';

const mapArrayToRoutes = (array) => {
    return array.map((route, i) => {
        return (
            <Route key={i} path={route.path} element={<route.view />} />
        )
    })
}
export const baseLayoutRoutes = mapArrayToRoutes(routes.filter((route) => (route.layoutType === 'base')));
export const minimalLayoutRoutes = mapArrayToRoutes(routes.filter((route) => (route.layoutType === 'minimal')));
