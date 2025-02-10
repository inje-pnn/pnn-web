import React, { Suspense, useEffect, useState } from "react";
import { RootRoutes } from "./app/router/rootRoutes";
import { useAuth } from "./shared/hooks/auth/useAuth";
import useUserStore from "./shared/store/useUserStroe";

const App = () => {
  const { checkAutoLogin } = useAuth();
  const user = useUserStore((state) => state.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAutoLogin().finally(() => setLoading(false));
  }, []);

  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      {!loading && <RootRoutes user={user} />}
    </Suspense>
  );
};

export default App;
