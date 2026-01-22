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
      label: ' Mon Compte',
      icon: 'pi pi-user',
      command: () => {
        window.location.href = '/account';
      },
    },
    {
      label: ' Se déconnecter',
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
        <Menu
          model={items}
          popup
          ref={menu}
          popupAlignment="right"
          baseZIndex={2000}
          className="!bg-white !border !border-gray-200 !rounded-lg !shadow-lg !py-2 !w-56"
          pt={{
            menu: { className: '!bg-white !p-0' },
            menuitem: { className: 'px-3 py-2' },
            menuitemicon: { className: 'text-gray-600' },
            menuitemtext: { className: 'text-gray-900' },
          }}
        />
        <Button
          icon="pi pi-user"
          className="p-button-rounded"
          onClick={(e) => menu.current?.toggle(e)}
        />
      </div>
    );
  }

  return (
<Button
  label="Se connecter"
  onClick={() => (window.location.href = '/api/auth/login')}
  className="p-button-rounded p-button-primary"
/>
  );
};

export default LoginButton;
