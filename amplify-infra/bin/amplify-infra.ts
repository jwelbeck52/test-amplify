// #!/usr/bin/env node
// import 'source-map-support/register';
// import * as cdk from 'aws-cdk-lib';
// import { AmplifyInfraStack } from '../lib/amplify-infra-stack';

// const app = new cdk.App();
// new AmplifyInfraStack(app, 'AmplifyInfraStack', {
//   /* If you don't specify 'env', this stack will be environment-agnostic.
//    * Account/Region-dependent features and context lookups will not work,
//    * but a single synthesized template can be deployed anywhere. */

//   /* Uncomment the next line to specialize this stack for the AWS Account
//    * and Region that are implied by the current CLI configuration. */
//   // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

//   /* Uncomment the next line if you know exactly what Account and Region you
//    * want to deploy the stack to. */
//   // env: { account: '123456789012', region: 'us-east-1' },

//   /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
// });

import * as cdk from "@aws-cdk/core";
import * as amplify from "@aws-cdk/aws-amplify";

export class AmplifyInfraStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Part 2 - Creation of the Amplify Application
    const amplifyApp = new amplify.App(this, "sample-react-app ", {
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: "[Repository-Owner]",
        repository: "[Repository-Name]",
        oauthToken: cdk.SecretValue.secretsManager("[Secret-Name]", {
          jsonField: "[Secret-Key]",
        }),
      }),
    });
    const masterBranch = amplifyApp.addBranch("master");
  }
}