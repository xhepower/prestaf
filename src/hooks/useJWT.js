import jwt_decode from "jwt-decode";
function useJWT(token) {
  const payload = jwt_decode(token);
  return payload;
}
export { useJWT };
