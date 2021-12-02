// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Constants } from "../../common/constants";

/// <summary>
///  Contains the cosmos diagnostic information for the current request to Azure Cosmos DB service.
export interface CosmosDiagnostics {
  [key: string]: any;
}

export class CosmosDiagnostics {
  /// <summary>
  /// This represent the end to end elapsed time of the request.
  /// If the request is still in progress it will return the current
  /// elapsed time since the start of the request.
  /// </summary>
  /// <returns>The clients end to end elapsed time of the request.</returns>
  public get clientElapsedTime(): Promise<any> {
    return this[Constants.ClientDiagnosticsConstants.DurationInMilliseconds];
  }

  /// <summary>
  /// Gets the list of all regions that were contacted for a request
  /// </summary>
  /// <returns>The list of tuples containing the Region name and the URI</returns>
  //public get contactedRegions() {}
}
