// 로그인한 사용자는 protected-route를 볼 수 있게 되고
// 로그인 하지않으면 로그인 또는 생성 페이지로 돌아가게 됨.
//이 페이지는 홈페이지와 프로필 페이지를 보호한다.

import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

//protectedroute는 children을 가질거다.
export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = auth.currentUser;
  console.log(user);
  if (user === null) {
    return <Navigate to="/login" />;
  }
  return children;
}
