import InputTextFloating from "@/Components/Atoms/InputTextFloating";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import { useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: "",
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    useEffect(() => {
        toast.error(errors.username, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }, [errors]);

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
            <div className="d-flex flex-column flex-column-fluid flex-center">
                <div className="d-flex flex-center w-lg-50 p-10">
                    <div className="card rounded-3 w-350px w-md-550px shadow">
                        <div className="card-body p-10">
                            <form className="form w-100" onSubmit={submit}>
                                <div className="text-center mb-11">
                                    <img
                                        src={"/images/logo-black.png"}
                                        alt="logo"
                                        width="60%"
                                    />
                                </div>
                                <div className="separator separator-content my-14">
                                    <span className="w-300px text-gray-500 fw-semibold fs-7">
                                        Login dengan Akun SIMAK
                                    </span>
                                </div>
                                <InputTextFloating
                                    label="Username/NPM"
                                    name="username"
                                    value={data.username}
                                    onChange={handleOnChange}
                                />
                                <InputTextFloating
                                    label="Password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    autoComplete="current-password"
                                    onChange={handleOnChange}
                                />
                                <div className="d-flex justify-content-between my-10">
                                    <Button
                                        type="submit"
                                        className="w-175px"
                                        disabled={processing}
                                    >
                                        <span className="indicator-label">
                                            {processing ? (
                                                <Spinner
                                                    animation="border"
                                                    variant="light"
                                                    size="sm"
                                                    className="me-3"
                                                />
                                            ) : (
                                                <i className="bi bi-box-arrow-in-right me-2 fs-4" />
                                            )}
                                            Masuk
                                        </span>
                                    </Button>
                                    <Button
                                        type="submit"
                                        variant="dark"
                                        className="w-175px"
                                    >
                                        <span className="indicator-label">
                                            <i className="bi bi-person-add me-2 fs-4" />
                                            Buat Akun
                                        </span>
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
