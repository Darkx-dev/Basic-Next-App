import React from "react";

export default function SignupPage() {
  return (
    <main className="flex justify-center ">
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <div className="card-body">
          <h2 className="card-title flex justify-center">Username</h2>
          <input
            type="text"
            placeholder="xyz234"
            className="input input-bordered w-full max-w-xs"
          />
          <h2 className="card-title flex justify-center">Password</h2>
          <input
            type="text"
            placeholder="xyz@email.com"
            className="input input-bordered w-full max-w-xs"
          />
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Create Account</button>
          </div>
        </div>
      </div>
    </main>
  );
}
