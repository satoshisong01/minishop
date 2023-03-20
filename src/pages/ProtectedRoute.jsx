import React from "react";
import { useAuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, requireAdmin }) {
  const {user} = useAuthContext();

  if(!user || (requireAdmin && !user.isAdmin)){
    return <Navigate to='/' replace/>
  }

  return children;
  //로그인한 사용자가 있는지 확인
  // 사용자가 어드민 권한이 있는지 확인
  //require이 true인 경우에는 로그인 필수, 어드민권한
  //조건이 맞지않으면 / 상위 경로로 이동
  //조건에 맞는 경우에만 전달된 children을 보여줌
}
