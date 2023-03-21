import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";

new gcp.cloudfunctions.HttpCallbackFunction("my-function", {
  callback: async (req, res: any) => {
    res.send('hello world');
  },
  iamMember: "allUsers",
  region: 'europe-west1',
  runtime: 'nodejs18',
});
