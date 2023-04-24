import { merge, forEach } from "lodash";
import { createHttpActionsFor } from "./client";

const API_RESOURCES = [{
 name: "profile",
}];

// http actions exposed by this client
export const httpActions = {};

// import * from "./client";

forEach(API_RESOURCES, (resources) => {
 const resourceHttpActions = createHttpActionsFor(resources);
 merge(httpActions, resourceHttpActions);
})