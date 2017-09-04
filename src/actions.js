export const EMAIL_SELECTED = 'EMAIL_SELECTED';
export const EMAIL_DELETED = 'EMAIL_DELETED';

export function emailDeleted(emailId) {
  return { type: EMAIL_DELETED, emailId };
}

export function emailSelected(emailId) {
  return { type: EMAIL_SELECTED, emailId };
}
