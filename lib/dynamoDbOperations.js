// lib/dynamoDbOperations.js

import { GetCommand, PutCommand } from "@aws-sdk/lib-dynamodb";
import { docClient } from "./dynamodb";

const TABLE_NAME = "CountryInfo";

export async function getCountryInfo(country) {
  const command = new GetCommand({
    TableName: TABLE_NAME,
    Key: { country },
  });

  try {
    const response = await docClient.send(command);
    return response.Item;
  } catch (error) {
    console.error("Error fetching country info:", error);
    throw error;
  }
}

export async function updateCountryInfo(country, advisoryText) {
  const command = new PutCommand({
    TableName: TABLE_NAME,
    Item: {
      country,
      advisoryText,
      updatedAt: new Date().toISOString(),
    },
  });

  try {
    await docClient.send(command);
  } catch (error) {
    console.error("Error updating country info:", error);
    throw error;
  }
}