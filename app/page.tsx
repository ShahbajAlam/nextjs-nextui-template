import { Button } from "@nextui-org/react";
import {
    LoginLink,
    RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
    return (
        <main className="flex w-full lg:w-[80%] lg:mx-auto min-h-[calc(100dvh-72px)] flex-col items-center justify-center">
            <h1>Welcome to NextJS + NextUI starter template</h1>
            <h2>Configured with Kinde Authentication</h2>
            <div className="flex justify-center items-center gap-6 my-4">
                <Button className="btn">
                    <RegisterLink>Register</RegisterLink>
                </Button>
                <Button className="btn">
                    <LoginLink>Login</LoginLink>
                </Button>
            </div>
        </main>
    );
}
