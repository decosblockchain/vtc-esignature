import { Document } from './document';

export class Wallet {
  checkPhraseSalt? : string;
  checkPhraseIv? : string;
  checkPhraseCipherText? : string;
  downloaded? : boolean;
  publicKey? : string;
  cipherText? : string;
  iv? : string;
  salt? : string;
  documents? : Document[];
}