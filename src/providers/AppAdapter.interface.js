// @flow

export interface AppAdapterInterface {
  render(): any;
  isAuthenticated(): boolean;
  authComponent(): any;
  logout(): void;
}
