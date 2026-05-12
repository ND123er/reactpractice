// Lightweight auth helpers: read/set token and decode JWT payload (client-side)
export const TOKEN_KEY = 'token';
export const ORG_CODE_KEY = 'org_code';
export const EMP_CODE_KEY = 'employee_emp_code';

export function setToken(token) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(TOKEN_KEY, token);
  } catch (e) {
    // ignore
  }
}

export function getToken() {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch (e) {
    return null;
  }
}

export function decodeTokenPayload(token) {
  try {
    const t = token || getToken();
    if (!t || typeof t !== 'string') return null;
    const base64Url = t.split('.')[1];
    if (!base64Url) return null;
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const padded = base64 + '='.repeat((4 - (base64.length % 4)) % 4);
    const jsonPayload = decodeURIComponent(
      atob(padded)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
}

export function getEmpCode() {
  const payload = decodeTokenPayload();
  const empFromToken = payload?.emp_code || payload?.empCode || payload?.employee_id || null;
  if (empFromToken) return empFromToken;
  // fallback to storage key set after create
  try {
    return typeof window !== 'undefined' ? localStorage.getItem(EMP_CODE_KEY) : null;
  } catch (e) {
    return null;
  }
}

export function getOrgCode() {
  const payload = decodeTokenPayload();
  const orgFromToken = payload?.organisation_id || null;
  if (orgFromToken) return orgFromToken;
  try {
    return typeof window !== 'undefined' ? localStorage.getItem(ORG_CODE_KEY) : null;
  } catch (e) {
    return null;
  }
}

export function persistEmpCode(empCode) {
  try {
    if (typeof window !== 'undefined' && empCode) localStorage.setItem(EMP_CODE_KEY, empCode);
  } catch (e) {}
}

export function persistOrgCode(orgCode) {
  try {
    if (typeof window !== 'undefined' && orgCode) localStorage.setItem(ORG_CODE_KEY, orgCode);
  } catch (e) {}
}

// Get org_id from Redux user object or fallback to localStorage
// This handles the case where Redux user doesn't have org_id after page refresh
export function getOrgIdFromReduxOrStorage(reduxUser) {
  // First check Redux user (updated by setOrgId action)
  if (reduxUser?.organisation_id) return reduxUser.organisation_id;
  // Fallback to localStorage (persisted by setOrgId or getOrgCode)
  return getOrgCode();
}

