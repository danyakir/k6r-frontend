export const STRINGS = {
  common: {
    title: "K6 Cloud Runner",
    intro: "You reached K6 Cloud Runner",
    description:
      "The only platform that runs your k6 scripts and monitors them live",
  },

  docs: {
    intro: `Welcome to K6 CLOUD RUNNER! 
            The only platform that runs, monitors and keeps track of your load testing.
            Just connect your Git repository and OpenShift, and we'll handle the rest.
            [_See it in action_](https://docs.example.com/k6r/demo)`,
    howToStart: {
      title: "How To Start",
      oc: {
        title: "Openshift",
        url: `**URL***: 
                Add your OpenShift cluster API URL, for example:
                https://api.cluster-1.example.com:6443
                Replace this example with your own cluster address.`,

        token: {
          description: `**Token***: 
                        In order to create jobs that run you script we need a token. Those are the steps for creating a token:`,
          step1: `Decide on which namespce you want to run. This namespace should have enough resources, most of the times its the pre-prod namespace.`,
          step2: `In the namespace you  go to **UserManagment** ➜ **ServiceAccounts**`,
          step3: `Create new **ServiceAccount**`,
          step4: `Change the name to _k6-runner_ or any other name you want and press **create**`,
          step5: "Go to **UserManagment** ➜ **RoleBindings**",
          step6: `Create new **RoleBinding**`,
          step7: `Change name: <service‑account‑name> (_k6-runner_)
                  Namespace: <wanted-namespace>
                  Role: search for and select _nsadmin_
                  Subject: ServiceAccount
                  Subject Namespace: <wanted-namespace>.
                  Subject Name: <service‑account‑name>  (_k6-runner_)`,
          step8: "Go to **Workloads** ➜ **Secrets**",
          step9: `Find the secret that follows the pattern <service‑account‑name>-token-<random‑suffix> (k6-runner-token-fdj69) and press it`,
          step10: `Inside the secret copy the value of the **token field**`,
        },
        namespace: `**Namespace***: 
                    Please specify the namespace you want to use. This is the namespace you want your jobs to run on.`,
        prometheusUrl: `**Prometheus Url**: 
                        The Prometheus URL field allows you to customize how your test metrics are collected and displayed. By default, your test metrics are automatically sent to a predefined Prometheus instance, where they are stored and made available for visualization in a default dashboard designed specifically for k6 shown in the app's iframe.
                        However, if you want to create a custom dashboard to display your test metrics in a way that suits your specific needs, you have two options:
                        1. You can contact our team and we will assist creating a custom dashboard tailored to your requirements in our grafana, meaning you can still see it in our app's iframe.
                        2. You can provide your own Prometheus URL, which will allow you to send your test metrics to a Prometheus instance of your own. This will enable you to create and customize your own Grafana, and view the metrics that are important to you.
                        **Note** that if you choose to use your own Prometheus URL, the default dashboard will no longer be used, and the grafana iframe will be irrelevant.
                        If you are new here you should first leave this field empty and monitor with our grafana, if later on you need some new monitorization change it.`,
        envioremntParams: `**Enviorment Params**: 
                            The Environment Params field allows you to specify any environment variables that are required to run your scripts. These variables will be made available to all the scripts you run, providing a convenient way to configure and customize their behavior.
                            By defining environment variables here, you can avoid hardcoding sensitive information or environment-specific details directly into your scripts. This makes it easier to manage and maintain your scripts, and ensures that they can run consistently across different environments.
                            For example, you might use this field to specify: API keys, authentication tokens, database connection strings, external service URLs...
                            Simply add your environment variables in the format **VARIABLE_NAME; VALUE**, and they will be available to all your scripts.`,
      },
      gitlab: {
        title: "Gitlab",
        url: `**URL***: 
              Add you basic repository url (the url in the repo's main page) for example: "https://gitlab.example.com/group-name/repo-name"`,
        token: {
          description: `**Token***: 
                        In order to pull you scripts we need a token. Those are the steps for creating a token:`,
          step1: `In your repo go to **Setting** ➜ **Access Tokens**`,
          step2: "Press on **Add new token**",
          step3: `Add token name
                  Set Expiration date to maximum by pressing the x
                  Select the Developer role
                  Give the necessary premisions: api, read_repository`,
          step4: "Copy project access token",
        },
        scriptsRoute: `**Scripts Route**: 
                        The script directory is where your test scripts are stored. By default, this is set to **src/load_scripts**. For now, all your scripts must be located in this single directory.
                        Note that in future updates, you'll have the flexibility to store your scripts in multiple directories and load them from different locations. However, for now, please ensure that all your scripts are stored in the same directory.`,
        branchName: `**Branch Name**: 
                      The branch name allows you to pick from which branch you want to pull your scripts. By default, this is set to main.`,
      },
    },
    usage: {
      title: "Usage",
      writingTheScript: `**Writing The Scripts:**
                          Writing you scripts should be quite simple, you should use the official k6 documentation: [**k6 Docs**](https://grafana.com/docs/k6/latest/)
                          **Importent Note:** You can and should use typescript and also import functions in your script`,
      beforeRunning: `**Before Running:**
                      From the table change memory (in Gi) and cpu (in Cores) according to the script's needs. A single script can support up to 40K virtual users. 
                      **Resources estimation:** 5 MB per user and 2-4 cores for 10k users. Mind yourself you should validate the resources given in first runs and adjust accordingly.`,

      monitor: `**Monitor:**
                Monitor through the grafana Iframe. In the default dashboard you see all the data specificly for the running script. Note that the scripts take about 2 minutes to run, wait patiently. For creating you own dashboard you can contanct us or redirect the metrics with your Prometheus Url (Settings).`,
      errorHandling: `When a script failes the pod is not deleted, go to you openshift cluster and check it out. A script failes because two main reasons: 
                      OMKILLED - the memory you provided is insufficient 
                      CrashLoopBackOff: error in your script, go to logs and see the problem.`,
    },
  },

  notFound: {
    title: "404 Page Not Found",
    description: "The page you are looking for does not exist.",
  },

  queriesKeys: {
    getScripts: ["getScripts"],
    editScript: ["editScript"],
    runScript: ["runScript"],
    abortScript: ["abortScript"],
    getRunningScript: (id: string) => {
      return ["getRunningScript", id];
    },
    getScriptsHistory: ["getScriptsHistory"],
    getSettings: ["getSettings"],
    editSettings: ["editSettings"],
  },

  pages: {
    rootLayout: "rootLayout",
    scriptsLayout: "scriptsLayout",
    allScriptsPage: "allScriptsPage",
    monitorScriptPage: "monitorScriptPage",
    settingsPage: "settingsPage",
    loginPage: "loginPage",
    scriptsUnavailablePage: "scriptsUnavailablePage",
    docsPage: "docsPage",
  },

  sessionStorage: {
    currentGroup: "currentGroup",
  },

  historyTable: {
    scriptName: "Script Name",
    status: "Status",
    startTime: "Start Time",
    endTime: "End Time",
    maxVus: "Max VUs",
    responseTime: "Response Time",
    responseTimeTooltip: "Average response time in MS",
    noHistory: "Nothing here yet",
  },

  scriptsTable: {
    title: "Scripts",
    scriptName: "Script Name",
    description: "Description",
    memoryRequired: "Memory Required",
    memoryRequiredTooltip: "Memory in Gi",
    cpuRequired: "Cpu Required",
    cpuRequiredTooltip: "CPU in Core",
    lastRun: "Last Run",
    noScripts: "no scripts in specific route",
  },

  settings: {
    title: "Settings",
    openShift: {
      title: "OPENSHIFT",
      url: {
        title: "Openshift Url*",
        error: "Openshift Url is required",
        placeholder: "https://api.cluster-1.example.com:6443",
      },
      token: {
        title: "Openshift Token*",
        error: "Openshift Token is required",
      },
      namespace: {
        title: "Openshift Namespace*",
        error: "Openshift Namespace is required",
        placeholder: "example-namespace",
      },
      prometheusUrl: {
        title: "Prometheus Url",
        placeholder: "default allows you to use our grafana",
      },
    },
    gitlab: {
      title: "GITLAB",
      url: {
        title: "GitLab Url*",
        error: "GitLab Url is required",
        placeholder: "https://gitlab.example.com/group/repo-name",
      },
      token: {
        title: "GitLab Token*",
        error: "GitLab Token is required",
      },
      scriptsRoute: {
        title: "Scripts Route",
        placeholder: "default is src/load_scripts",
      },
      branchName: {
        title: "Branch Name",
        placeholder: "default is main",
      },
      enviormentParams: {
        title: "Script's Enviorment Params",
        name: "Name",
        nameError: "Name is required",
        namePlaceholder: "ENV_NAME",
        value: "Value",
        valueError: "Value is required",
        valuePlaceholder: "ENV_VALUE",
      },
    },
  },

  errors: {
    internalServerError: "something went wrong",
    serviceUnavailable: "the app is currently unavailable",
    authenticationFailed:
      "SSO authentication failed, please fix the problem and try again",
    invalidUrl: "Invalid Url",
    scriptsUnavailable: "Scripts are unavailable",
  },

  messages: {
    savedSuccssfully: "saved",
  },

  buttons: {
    login: "Login",
    viewSteps: "View Steps",
    save: "Save",
    addParam: "Add Param",
    backHome: "Back Home",
  },
};
