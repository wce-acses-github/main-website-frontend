import { useAuth } from "../../context/authContext.jsx";
import AdminComponent from "./AdminComponent.jsx";
import LoginComponent from "./LoginComponent.jsx";
import "./AdminPage.css";

function AdminPage() {
    const { isLoggedIn } = useAuth();

    return (
        <div className="admin-page">
            {isLoggedIn ? (
                <AdminComponent />
            ) : (
                <LoginComponent />
            )}
        </div>
    );
}

export default AdminPage;
