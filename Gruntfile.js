const rulesConfigInfra = require("rules-config/infra");
const IDI = require("openchs-idi");

module.exports = IDI.configure(
  {
    name: "himachal_pradesh",
    "chs-admin": "admin",
    "org-name": "himachal_pradesh",
    "org-admin": "admin@himachal",
    secrets: "../secrets.json",
    files: {
      adminUsers: {
        dev: ["users/admin-user.json"],
        staging: ["users/admin-user.json"]
      },
      forms: [
        "forms/Registration.json",
        // "forms/Eligible couple enrolment.json",
        // "forms/Eligible Couple Followup.json",
        // "forms/Pregnancy Enrolment.json",
        // "forms/ANC Form.json",
        // "forms/Delivery Form.json",
        // "forms/Abortion Form.json",
        // "forms/Abortion Followup Form.json",
        // "forms/Mother PNC Form.json",
        // "forms/Child Enrolment.json",
        // "forms/Birth Form.json",
        // "forms/Child PNC Form.json",
        // "forms/Child Followup Form.json",
        // "forms/checklistForm.json",
        // "forms/Program Exit Form.json",
        // "forms/Program Cancel Form.json"
      ],
      formMappings: ["metadata/formMappings.json"],
      formDeletions: [],
      formAdditions: [],
      catchments: ["metadata/catchments.json"],
      checklistDetails: [
        
      ],
      concepts: [ "concepts.json"
              ],
      locations: ["metadata/locations.json"],
      programs: ["programs.json"],
      encounterTypes: [],
      operationalEncounterTypes: [],
      operationalPrograms: [],
      subjectTypes: ["subjectTypes.json"],
      operationalSubjectTypes: ["metadata/operationalSubjectTypes.json"],
      users: {
        dev: ["users/dev-users.json"],
        staging: ["users/dev-users.json"]
      },
      rules: ["./rules.js"],
      organisationSql: [
        /* "create_organisation.sql"*/
      ],
      organisationConfig: ["organisationConfig.json"],
      translations: ["translations/en.json"]
    }
  },
  rulesConfigInfra
);
