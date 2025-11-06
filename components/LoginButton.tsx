'use client';

import { Button } from 'primereact/button';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { Menu } from 'primereact/menu';

const LoginButton = () => {
  const [user, setUser] = useState<{ name?: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const menu = useRef<Menu>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/auth/me');
        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Failed to fetch user:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const items = [
    {
      label: 'Mon Compte',
      icon: 'pi pi-user',
      command: () => {
        window.location.href = '/account';
      },
    },
    {
      label: 'Se déconnecter',
      icon: 'pi pi-sign-out',
      command: () => {
        window.location.href = '/api/auth/logout';
      },
    },
  ];

  if (loading) {
    return null;
  }

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <span>Bienvenue, {user.name}</span>
        <Menu model={items} popup ref={menu} />
        <Button
          icon="pi pi-user"
          className="p-button-rounded"
          onClick={(e) => menu.current?.toggle(e)}
        />
      </div>
    );
  }

  return (
    <Link href="/api/auth/login">
      <Button label="Se connecter" icon="pi pi-sign-in" />
    </Link>
  );
};

export default LoginButton;
