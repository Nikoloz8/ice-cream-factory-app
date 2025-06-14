import { useLocation, useParams } from "react-router-dom"

export default function index() {
    const getRole = () => {
        if (decodeURI(useLocation().pathname).includes("roles")) {
            const location = decodeURI(useLocation().pathname).split("/")
            const role = location[2]
            return role
        } else {
            const { role } = useParams()
            return role
        }
    }
    return { getRole }
}
