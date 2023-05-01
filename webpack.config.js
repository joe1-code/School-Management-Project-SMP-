import path from 'path';
import crypto from 'crypto';

export default {
 // ... other webpack configurations ...
 resolve: {
  fallback: {
   "crypto": require.resolve("crypto-browserify")
  }
 }
};