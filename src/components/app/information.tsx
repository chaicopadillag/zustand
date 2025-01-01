import { AuthPrivate } from '@/interfaces';
import { AuthService } from '@/services/auth.service';
import { useEffect, useState } from 'react';

export const InformationPrivate = () => {
  const [info, setInfo] = useState<AuthPrivate | undefined>();

  useEffect(() => {
    AuthService.authPrivate()
      .then((data) => {
        setInfo(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(info, null, 2)}</pre>
    </div>
  );
};
