const storageKey = 'storageKey';

export class Storage {
  getStore = () => {
       try {
           const serializedState = localStorage.getItem(storageKey);
           if (serializedState === null) {
               return undefined;
           }
           return JSON.parse(serializedState);
       } catch (err) {
           return undefined;
       }
   }

   setStore = (state) => {
       try {
           const serializedState = JSON.stringify(state);
           localStorage.setItem(storageKey, serializedState);
       } catch (err) {
           // @todo?
       }
   }

   removeStore = () => {
       try {
           localStorage.removeItem(storageKey);
       } catch (err) {
           // @todo?
       }
   }
}
