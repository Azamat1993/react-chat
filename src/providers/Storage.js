const storageKey = 'storageKey';

export class Storage {
  getStore = (key= storageKey) => {
       try {
           const serializedState = localStorage.getItem(key);
           if (serializedState === null) {
               return undefined;
           }
           return JSON.parse(serializedState);
       } catch (err) {
           return undefined;
       }
   }

   setStore = (state, key= storageKey) => {
       try {
           const serializedState = JSON.stringify(state);
           localStorage.setItem(key, serializedState);
       } catch (err) {
           // @todo?
       }
   }

   removeStore = (key= storageKey) => {
       try {
           localStorage.removeItem(key);
       } catch (err) {
           // @todo?
       }
   }
}
