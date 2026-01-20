"use client";

import React from "react"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface PasswordGateProps {
  children: React.ReactNode;
}

export function PasswordGate({ children }: PasswordGateProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if already authenticated in session
    const auth = sessionStorage.getItem("kares-auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "khosla") {
      sessionStorage.setItem("kares-auth", "true");
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <h1 className="text-5xl md:text-7xl font-serif text-foreground tracking-tight mb-4">
          Kares AI
        </h1>
        <p className="text-2xl md:text-3xl font-serif text-primary mb-8">
          Coming Soon
        </p>
        <p className="text-lg text-muted-foreground mb-12">
          Your Agent for Comprehensive Care
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="password"
              placeholder="Enter password to preview"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              className={`w-full text-center font-sans ${
                error ? "border-destructive" : ""
              }`}
            />
            {error && (
              <p className="text-sm text-destructive mt-2">
                Incorrect password
              </p>
            )}
          </div>
          <Button type="submit" className="w-full font-sans">
            Access Preview
          </Button>
        </form>
      </div>
    </div>
  );
}
