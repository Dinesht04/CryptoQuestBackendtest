import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    // .setProject('662a61da6824b9c5f45a'); // Replace with your existing project ID

export const account = new Account(client);
export { ID } from 'appwrite';