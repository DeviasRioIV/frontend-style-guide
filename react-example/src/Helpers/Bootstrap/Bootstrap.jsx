// Internal Modules
import bootstrapService from "./bootstrap.service.js";

export default async function () {

  // Call the service
  const response = bootstrapService();

  // Do any data management here

  // Return action
  return {
    type: "BOOTSTRAP",
    data: response.data
  }
}