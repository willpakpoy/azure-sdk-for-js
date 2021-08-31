## API Report File for "@azure/arm-authorization"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';

// @public
export type ApprovalMode = string;

// @public
export interface ApprovalSettings {
    approvalMode?: ApprovalMode;
    approvalStages?: ApprovalStage[];
    isApprovalRequired?: boolean;
    isApprovalRequiredForExtension?: boolean;
    isRequestorJustificationRequired?: boolean;
}

// @public
export interface ApprovalStage {
    approvalStageTimeOutInDays?: number;
    escalationApprovers?: UserSet[];
    escalationTimeInMinutes?: number;
    isApproverJustificationRequired?: boolean;
    isEscalationEnabled?: boolean;
    primaryApprovers?: UserSet[];
}

// @public
export type AssignmentType = string;

// @public (undocumented)
export class AuthorizationManagementClient extends AuthorizationManagementClientContext {
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: AuthorizationManagementClientOptionalParams);
    // (undocumented)
    eligibleChildResources: EligibleChildResources;
    // (undocumented)
    roleAssignments: RoleAssignments;
    // (undocumented)
    roleAssignmentScheduleInstances: RoleAssignmentScheduleInstances;
    // (undocumented)
    roleAssignmentScheduleRequests: RoleAssignmentScheduleRequests;
    // (undocumented)
    roleAssignmentSchedules: RoleAssignmentSchedules;
    // (undocumented)
    roleEligibilityScheduleInstances: RoleEligibilityScheduleInstances;
    // (undocumented)
    roleEligibilityScheduleRequests: RoleEligibilityScheduleRequests;
    // (undocumented)
    roleEligibilitySchedules: RoleEligibilitySchedules;
    // (undocumented)
    roleManagementPolicies: RoleManagementPolicies;
    // (undocumented)
    roleManagementPolicyAssignments: RoleManagementPolicyAssignments;
}

// @public (undocumented)
export class AuthorizationManagementClientContext extends coreClient.ServiceClient {
    // (undocumented)
    $host: string;
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: AuthorizationManagementClientOptionalParams);
    // (undocumented)
    apiVersion: string;
    // (undocumented)
    subscriptionId: string;
}

// @public
export interface AuthorizationManagementClientOptionalParams extends coreClient.ServiceClientOptions {
    $host?: string;
    apiVersion?: string;
    endpoint?: string;
}

// @public
export interface CloudError {
    error?: CloudErrorBody;
}

// @public
export interface CloudErrorBody {
    code?: string;
    message?: string;
}

// @public
export interface EligibleChildResource {
    readonly id?: string;
    readonly name?: string;
    readonly type?: string;
}

// @public
export interface EligibleChildResources {
    list(scope: string, options?: EligibleChildResourcesGetOptionalParams): PagedAsyncIterableIterator<EligibleChildResource>;
}

// @public
export interface EligibleChildResourcesGetNextOptionalParams extends coreClient.OperationOptions {
    filter?: string;
}

// @public
export type EligibleChildResourcesGetNextResponse = EligibleChildResourcesListResult;

// @public
export interface EligibleChildResourcesGetOptionalParams extends coreClient.OperationOptions {
    filter?: string;
}

// @public
export type EligibleChildResourcesGetResponse = EligibleChildResourcesListResult;

// @public
export interface EligibleChildResourcesListResult {
    nextLink?: string;
    value?: EligibleChildResource[];
}

// @public
export type EnablementRules = string;

// @public
export interface ErrorAdditionalInfo {
    readonly info?: Record<string, unknown>;
    readonly type?: string;
}

// @public
export interface ErrorDetail {
    readonly additionalInfo?: ErrorAdditionalInfo[];
    readonly code?: string;
    readonly details?: ErrorDetail[];
    readonly message?: string;
    readonly target?: string;
}

// @public
export interface ErrorResponse {
    error?: ErrorDetail;
}

// @public (undocumented)
export interface ExpandedProperties {
    principal?: ExpandedPropertiesPrincipal;
    roleDefinition?: ExpandedPropertiesRoleDefinition;
    scope?: ExpandedPropertiesScope;
}

// @public
export interface ExpandedPropertiesPrincipal {
    displayName?: string;
    email?: string;
    id?: string;
    type?: string;
}

// @public
export interface ExpandedPropertiesRoleDefinition {
    displayName?: string;
    id?: string;
    type?: string;
}

// @public
export interface ExpandedPropertiesScope {
    displayName?: string;
    id?: string;
    type?: string;
}

// @public
export enum KnownApprovalMode {
    // (undocumented)
    NoApproval = "NoApproval",
    // (undocumented)
    Parallel = "Parallel",
    // (undocumented)
    Serial = "Serial",
    // (undocumented)
    SingleStage = "SingleStage"
}

// @public
export enum KnownAssignmentType {
    // (undocumented)
    Activated = "Activated",
    // (undocumented)
    Assigned = "Assigned"
}

// @public
export enum KnownEnablementRules {
    // (undocumented)
    Justification = "Justification",
    // (undocumented)
    MultiFactorAuthentication = "MultiFactorAuthentication",
    // (undocumented)
    Ticketing = "Ticketing"
}

// @public
export enum KnownMemberType {
    // (undocumented)
    Direct = "Direct",
    // (undocumented)
    Group = "Group",
    // (undocumented)
    Inherited = "Inherited"
}

// @public
export enum KnownNotificationDeliveryMechanism {
    // (undocumented)
    Email = "Email"
}

// @public
export enum KnownNotificationLevel {
    // (undocumented)
    All = "All",
    // (undocumented)
    Critical = "Critical",
    // (undocumented)
    None = "None"
}

// @public
export enum KnownPrincipalType {
    // (undocumented)
    Application = "Application",
    // (undocumented)
    Device = "Device",
    // (undocumented)
    DirectoryObjectOrGroup = "DirectoryObjectOrGroup",
    // (undocumented)
    DirectoryRoleTemplate = "DirectoryRoleTemplate",
    // (undocumented)
    Everyone = "Everyone",
    // (undocumented)
    ForeignGroup = "ForeignGroup",
    // (undocumented)
    Group = "Group",
    // (undocumented)
    MSI = "MSI",
    // (undocumented)
    ServicePrincipal = "ServicePrincipal",
    // (undocumented)
    Unknown = "Unknown",
    // (undocumented)
    User = "User"
}

// @public
export enum KnownRecipientType {
    // (undocumented)
    Admin = "Admin",
    // (undocumented)
    Approver = "Approver",
    // (undocumented)
    Requestor = "Requestor"
}

// @public
export enum KnownRequestType {
    // (undocumented)
    AdminAssign = "AdminAssign",
    // (undocumented)
    AdminExtend = "AdminExtend",
    // (undocumented)
    AdminRemove = "AdminRemove",
    // (undocumented)
    AdminRenew = "AdminRenew",
    // (undocumented)
    AdminUpdate = "AdminUpdate",
    // (undocumented)
    SelfActivate = "SelfActivate",
    // (undocumented)
    SelfDeactivate = "SelfDeactivate",
    // (undocumented)
    SelfExtend = "SelfExtend",
    // (undocumented)
    SelfRenew = "SelfRenew"
}

// @public
export enum KnownRoleManagementPolicyRuleType {
    // (undocumented)
    RoleManagementPolicyApprovalRule = "RoleManagementPolicyApprovalRule",
    // (undocumented)
    RoleManagementPolicyAuthenticationContextRule = "RoleManagementPolicyAuthenticationContextRule",
    // (undocumented)
    RoleManagementPolicyEnablementRule = "RoleManagementPolicyEnablementRule",
    // (undocumented)
    RoleManagementPolicyExpirationRule = "RoleManagementPolicyExpirationRule",
    // (undocumented)
    RoleManagementPolicyNotificationRule = "RoleManagementPolicyNotificationRule"
}

// @public
export enum KnownStatus {
    // (undocumented)
    Accepted = "Accepted",
    // (undocumented)
    AdminApproved = "AdminApproved",
    // (undocumented)
    AdminDenied = "AdminDenied",
    // (undocumented)
    Canceled = "Canceled",
    // (undocumented)
    Denied = "Denied",
    // (undocumented)
    Failed = "Failed",
    // (undocumented)
    FailedAsResourceIsLocked = "FailedAsResourceIsLocked",
    // (undocumented)
    Granted = "Granted",
    // (undocumented)
    Invalid = "Invalid",
    // (undocumented)
    PendingAdminDecision = "PendingAdminDecision",
    // (undocumented)
    PendingApproval = "PendingApproval",
    // (undocumented)
    PendingApprovalProvisioning = "PendingApprovalProvisioning",
    // (undocumented)
    PendingEvaluation = "PendingEvaluation",
    // (undocumented)
    PendingExternalProvisioning = "PendingExternalProvisioning",
    // (undocumented)
    PendingProvisioning = "PendingProvisioning",
    // (undocumented)
    PendingRevocation = "PendingRevocation",
    // (undocumented)
    PendingScheduleCreation = "PendingScheduleCreation",
    // (undocumented)
    Provisioned = "Provisioned",
    // (undocumented)
    ProvisioningStarted = "ProvisioningStarted",
    // (undocumented)
    Revoked = "Revoked",
    // (undocumented)
    ScheduleCreated = "ScheduleCreated",
    // (undocumented)
    TimedOut = "TimedOut"
}

// @public
export enum KnownType {
    // (undocumented)
    AfterDateTime = "AfterDateTime",
    // (undocumented)
    AfterDuration = "AfterDuration",
    // (undocumented)
    NoExpiration = "NoExpiration"
}

// @public
export enum KnownUserType {
    // (undocumented)
    Group = "Group",
    // (undocumented)
    User = "User"
}

// @public
export type MemberType = string;

// @public
export type NotificationDeliveryMechanism = string;

// @public
export type NotificationLevel = string;

// @public (undocumented)
export interface PolicyAssignmentProperties {
    policy?: PolicyAssignmentPropertiesPolicy;
    roleDefinition?: PolicyAssignmentPropertiesRoleDefinition;
    scope?: PolicyAssignmentPropertiesScope;
}

// @public
export interface PolicyAssignmentPropertiesPolicy {
    id?: string;
    readonly lastModifiedBy?: Principal;
    lastModifiedDateTime?: Date;
}

// @public
export interface PolicyAssignmentPropertiesRoleDefinition {
    displayName?: string;
    id?: string;
    type?: string;
}

// @public
export interface PolicyAssignmentPropertiesScope {
    displayName?: string;
    id?: string;
    type?: string;
}

// @public (undocumented)
export interface PolicyProperties {
    readonly scope?: PolicyPropertiesScope;
}

// @public
export interface PolicyPropertiesScope {
    displayName?: string;
    id?: string;
    type?: string;
}

// @public
export interface Principal {
    displayName?: string;
    email?: string;
    id?: string;
    type?: string;
}

// @public
export type PrincipalType = string;

// @public
export type RecipientType = string;

// @public
export type RequestType = string;

// @public
export interface RoleAssignment {
    condition?: string;
    conditionVersion?: string;
    readonly createdBy?: string;
    readonly createdOn?: Date;
    delegatedManagedIdentityResourceId?: string;
    description?: string;
    readonly id?: string;
    readonly name?: string;
    principalId?: string;
    principalType?: PrincipalType;
    roleDefinitionId?: string;
    readonly scope?: string;
    readonly type?: string;
    readonly updatedBy?: string;
    readonly updatedOn?: Date;
}

// @public
export interface RoleAssignmentCreateParameters {
    condition?: string;
    conditionVersion?: string;
    readonly createdBy?: string;
    readonly createdOn?: Date;
    delegatedManagedIdentityResourceId?: string;
    description?: string;
    principalId: string;
    principalType?: PrincipalType;
    roleDefinitionId: string;
    readonly scope?: string;
    readonly updatedBy?: string;
    readonly updatedOn?: Date;
}

// @public
export interface RoleAssignmentFilter {
    principalId?: string;
}

// @public
export interface RoleAssignmentListResult {
    readonly nextLink?: string;
    value?: RoleAssignment[];
}

// @public
export interface RoleAssignments {
    create(scope: string, roleAssignmentName: string, parameters: RoleAssignmentCreateParameters, options?: RoleAssignmentsCreateOptionalParams): Promise<RoleAssignmentsCreateResponse>;
    createById(roleAssignmentId: string, parameters: RoleAssignmentCreateParameters, options?: RoleAssignmentsCreateByIdOptionalParams): Promise<RoleAssignmentsCreateByIdResponse>;
    delete(scope: string, roleAssignmentName: string, options?: RoleAssignmentsDeleteOptionalParams): Promise<RoleAssignmentsDeleteResponse>;
    deleteById(roleAssignmentId: string, options?: RoleAssignmentsDeleteByIdOptionalParams): Promise<RoleAssignmentsDeleteByIdResponse>;
    get(scope: string, roleAssignmentName: string, options?: RoleAssignmentsGetOptionalParams): Promise<RoleAssignmentsGetResponse>;
    getById(roleAssignmentId: string, options?: RoleAssignmentsGetByIdOptionalParams): Promise<RoleAssignmentsGetByIdResponse>;
    listForResource(resourceGroupName: string, resourceProviderNamespace: string, resourceType: string, resourceName: string, options?: RoleAssignmentsListForResourceOptionalParams): PagedAsyncIterableIterator<RoleAssignment>;
    listForResourceGroup(resourceGroupName: string, options?: RoleAssignmentsListForResourceGroupOptionalParams): PagedAsyncIterableIterator<RoleAssignment>;
    listForScope(scope: string, options?: RoleAssignmentsListForScopeOptionalParams): PagedAsyncIterableIterator<RoleAssignment>;
    listForSubscription(options?: RoleAssignmentsListForSubscriptionOptionalParams): PagedAsyncIterableIterator<RoleAssignment>;
    validate(scope: string, roleAssignmentName: string, parameters: RoleAssignmentCreateParameters, options?: RoleAssignmentsValidateOptionalParams): Promise<RoleAssignmentsValidateResponse>;
    validateById(roleAssignmentId: string, parameters: RoleAssignmentCreateParameters, options?: RoleAssignmentsValidateByIdOptionalParams): Promise<RoleAssignmentsValidateByIdResponse>;
}

// @public
export interface RoleAssignmentSchedule {
    assignmentType?: AssignmentType;
    condition?: string;
    conditionVersion?: string;
    createdOn?: Date;
    endDateTime?: Date;
    expandedProperties?: ExpandedProperties;
    readonly id?: string;
    linkedRoleEligibilityScheduleId?: string;
    memberType?: MemberType;
    readonly name?: string;
    principalId?: string;
    principalType?: PrincipalType;
    roleAssignmentScheduleRequestId?: string;
    roleDefinitionId?: string;
    scope?: string;
    startDateTime?: Date;
    status?: Status;
    readonly type?: string;
    updatedOn?: Date;
}

// @public
export interface RoleAssignmentScheduleFilter {
    principalId?: string;
    roleDefinitionId?: string;
    status?: string;
}

// @public
export interface RoleAssignmentScheduleInstance {
    assignmentType?: AssignmentType;
    condition?: string;
    conditionVersion?: string;
    createdOn?: Date;
    endDateTime?: Date;
    expandedProperties?: ExpandedProperties;
    readonly id?: string;
    linkedRoleEligibilityScheduleId?: string;
    linkedRoleEligibilityScheduleInstanceId?: string;
    memberType?: MemberType;
    readonly name?: string;
    originRoleAssignmentId?: string;
    principalId?: string;
    principalType?: PrincipalType;
    roleAssignmentScheduleId?: string;
    roleDefinitionId?: string;
    scope?: string;
    startDateTime?: Date;
    status?: Status;
    readonly type?: string;
}

// @public
export interface RoleAssignmentScheduleInstanceFilter {
    principalId?: string;
    roleAssignmentScheduleId?: string;
    roleDefinitionId?: string;
    status?: string;
}

// @public
export interface RoleAssignmentScheduleInstanceListResult {
    nextLink?: string;
    value?: RoleAssignmentScheduleInstance[];
}

// @public
export interface RoleAssignmentScheduleInstances {
    get(scope: string, roleAssignmentScheduleInstanceName: string, options?: RoleAssignmentScheduleInstancesGetOptionalParams): Promise<RoleAssignmentScheduleInstancesGetResponse>;
    listForScope(scope: string, options?: RoleAssignmentScheduleInstancesListForScopeOptionalParams): PagedAsyncIterableIterator<RoleAssignmentScheduleInstance>;
}

// @public
export interface RoleAssignmentScheduleInstancesGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RoleAssignmentScheduleInstancesGetResponse = RoleAssignmentScheduleInstance;

// @public
export interface RoleAssignmentScheduleInstancesListForScopeNextOptionalParams extends coreClient.OperationOptions {
    filter?: string;
}

// @public
export type RoleAssignmentScheduleInstancesListForScopeNextResponse = RoleAssignmentScheduleInstanceListResult;

// @public
export interface RoleAssignmentScheduleInstancesListForScopeOptionalParams extends coreClient.OperationOptions {
    filter?: string;
}

// @public
export type RoleAssignmentScheduleInstancesListForScopeResponse = RoleAssignmentScheduleInstanceListResult;

// @public
export interface RoleAssignmentScheduleListResult {
    nextLink?: string;
    value?: RoleAssignmentSchedule[];
}

// @public
export interface RoleAssignmentScheduleRequest {
    readonly approvalId?: string;
    condition?: string;
    conditionVersion?: string;
    readonly createdOn?: Date;
    readonly expandedProperties?: ExpandedProperties;
    readonly id?: string;
    justification?: string;
    linkedRoleEligibilityScheduleId?: string;
    readonly name?: string;
    principalId?: string;
    readonly principalType?: PrincipalType;
    readonly requestorId?: string;
    requestType?: RequestType;
    roleDefinitionId?: string;
    scheduleInfo?: RoleAssignmentScheduleRequestPropertiesScheduleInfo;
    readonly scope?: string;
    readonly status?: Status;
    targetRoleAssignmentScheduleId?: string;
    targetRoleAssignmentScheduleInstanceId?: string;
    ticketInfo?: RoleAssignmentScheduleRequestPropertiesTicketInfo;
    readonly type?: string;
}

// @public
export interface RoleAssignmentScheduleRequestFilter {
    principalId?: string;
    requestorId?: string;
    roleDefinitionId?: string;
    status?: string;
}

// @public
export interface RoleAssignmentScheduleRequestListResult {
    nextLink?: string;
    value?: RoleAssignmentScheduleRequest[];
}

// @public
export interface RoleAssignmentScheduleRequestPropertiesScheduleInfo {
    expiration?: RoleAssignmentScheduleRequestPropertiesScheduleInfoExpiration;
    startDateTime?: Date;
}

// @public
export interface RoleAssignmentScheduleRequestPropertiesScheduleInfoExpiration {
    duration?: string;
    endDateTime?: Date;
    type?: Type;
}

// @public
export interface RoleAssignmentScheduleRequestPropertiesTicketInfo {
    ticketNumber?: string;
    ticketSystem?: string;
}

// @public
export interface RoleAssignmentScheduleRequests {
    cancel(scope: string, roleAssignmentScheduleRequestName: string, options?: RoleAssignmentScheduleRequestsCancelOptionalParams): Promise<void>;
    create(scope: string, roleAssignmentScheduleRequestName: string, parameters: RoleAssignmentScheduleRequest, options?: RoleAssignmentScheduleRequestsCreateOptionalParams): Promise<RoleAssignmentScheduleRequestsCreateResponse>;
    get(scope: string, roleAssignmentScheduleRequestName: string, options?: RoleAssignmentScheduleRequestsGetOptionalParams): Promise<RoleAssignmentScheduleRequestsGetResponse>;
    listForScope(scope: string, options?: RoleAssignmentScheduleRequestsListForScopeOptionalParams): PagedAsyncIterableIterator<RoleAssignmentScheduleRequest>;
}

// @public
export interface RoleAssignmentScheduleRequestsCancelOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface RoleAssignmentScheduleRequestsCreateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RoleAssignmentScheduleRequestsCreateResponse = RoleAssignmentScheduleRequest;

// @public
export interface RoleAssignmentScheduleRequestsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RoleAssignmentScheduleRequestsGetResponse = RoleAssignmentScheduleRequest;

// @public
export interface RoleAssignmentScheduleRequestsListForScopeNextOptionalParams extends coreClient.OperationOptions {
    filter?: string;
}

// @public
export type RoleAssignmentScheduleRequestsListForScopeNextResponse = RoleAssignmentScheduleRequestListResult;

// @public
export interface RoleAssignmentScheduleRequestsListForScopeOptionalParams extends coreClient.OperationOptions {
    filter?: string;
}

// @public
export type RoleAssignmentScheduleRequestsListForScopeResponse = RoleAssignmentScheduleRequestListResult;

// @public
export interface RoleAssignmentSchedules {
    get(scope: string, roleAssignmentScheduleName: string, options?: RoleAssignmentSchedulesGetOptionalParams): Promise<RoleAssignmentSchedulesGetResponse>;
    listForScope(scope: string, options?: RoleAssignmentSchedulesListForScopeOptionalParams): PagedAsyncIterableIterator<RoleAssignmentSchedule>;
}

// @public
export interface RoleAssignmentSchedulesGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RoleAssignmentSchedulesGetResponse = RoleAssignmentSchedule;

// @public
export interface RoleAssignmentSchedulesListForScopeNextOptionalParams extends coreClient.OperationOptions {
    filter?: string;
}

// @public
export type RoleAssignmentSchedulesListForScopeNextResponse = RoleAssignmentScheduleListResult;

// @public
export interface RoleAssignmentSchedulesListForScopeOptionalParams extends coreClient.OperationOptions {
    filter?: string;
}

// @public
export type RoleAssignmentSchedulesListForScopeResponse = RoleAssignmentScheduleListResult;

// @public
export interface RoleAssignmentsCreateByIdOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RoleAssignmentsCreateByIdResponse = RoleAssignment;

// @public
export interface RoleAssignmentsCreateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RoleAssignmentsCreateResponse = RoleAssignment;

// @public
export interface RoleAssignmentsDeleteByIdOptionalParams extends coreClient.OperationOptions {
    tenantId?: string;
}

// @public
export type RoleAssignmentsDeleteByIdResponse = RoleAssignment;

// @public
export interface RoleAssignmentsDeleteOptionalParams extends coreClient.OperationOptions {
    tenantId?: string;
}

// @public
export type RoleAssignmentsDeleteResponse = RoleAssignment;

// @public
export interface RoleAssignmentsGetByIdOptionalParams extends coreClient.OperationOptions {
    tenantId?: string;
}

// @public
export type RoleAssignmentsGetByIdResponse = RoleAssignment;

// @public
export interface RoleAssignmentsGetOptionalParams extends coreClient.OperationOptions {
    tenantId?: string;
}

// @public
export type RoleAssignmentsGetResponse = RoleAssignment;

// @public
export interface RoleAssignmentsListForResourceGroupNextOptionalParams extends coreClient.OperationOptions {
    filter?: string;
    tenantId?: string;
}

// @public
export type RoleAssignmentsListForResourceGroupNextResponse = RoleAssignmentListResult;

// @public
export interface RoleAssignmentsListForResourceGroupOptionalParams extends coreClient.OperationOptions {
    filter?: string;
    tenantId?: string;
}

// @public
export type RoleAssignmentsListForResourceGroupResponse = RoleAssignmentListResult;

// @public
export interface RoleAssignmentsListForResourceNextOptionalParams extends coreClient.OperationOptions {
    filter?: string;
    tenantId?: string;
}

// @public
export type RoleAssignmentsListForResourceNextResponse = RoleAssignmentListResult;

// @public
export interface RoleAssignmentsListForResourceOptionalParams extends coreClient.OperationOptions {
    filter?: string;
    tenantId?: string;
}

// @public
export type RoleAssignmentsListForResourceResponse = RoleAssignmentListResult;

// @public
export interface RoleAssignmentsListForScopeNextOptionalParams extends coreClient.OperationOptions {
    filter?: string;
    tenantId?: string;
}

// @public
export type RoleAssignmentsListForScopeNextResponse = RoleAssignmentListResult;

// @public
export interface RoleAssignmentsListForScopeOptionalParams extends coreClient.OperationOptions {
    filter?: string;
    tenantId?: string;
}

// @public
export type RoleAssignmentsListForScopeResponse = RoleAssignmentListResult;

// @public
export interface RoleAssignmentsListForSubscriptionNextOptionalParams extends coreClient.OperationOptions {
    filter?: string;
    tenantId?: string;
}

// @public
export type RoleAssignmentsListForSubscriptionNextResponse = RoleAssignmentListResult;

// @public
export interface RoleAssignmentsListForSubscriptionOptionalParams extends coreClient.OperationOptions {
    filter?: string;
    tenantId?: string;
}

// @public
export type RoleAssignmentsListForSubscriptionResponse = RoleAssignmentListResult;

// @public
export interface RoleAssignmentsValidateByIdOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RoleAssignmentsValidateByIdResponse = ValidationResponse;

// @public
export interface RoleAssignmentsValidateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RoleAssignmentsValidateResponse = ValidationResponse;

// @public
export interface RoleEligibilitySchedule {
    condition?: string;
    conditionVersion?: string;
    createdOn?: Date;
    endDateTime?: Date;
    expandedProperties?: ExpandedProperties;
    readonly id?: string;
    memberType?: MemberType;
    readonly name?: string;
    principalId?: string;
    principalType?: PrincipalType;
    roleDefinitionId?: string;
    roleEligibilityScheduleRequestId?: string;
    scope?: string;
    startDateTime?: Date;
    status?: Status;
    readonly type?: string;
    updatedOn?: Date;
}

// @public
export interface RoleEligibilityScheduleFilter {
    principalId?: string;
    roleDefinitionId?: string;
    status?: string;
}

// @public
export interface RoleEligibilityScheduleInstance {
    condition?: string;
    conditionVersion?: string;
    createdOn?: Date;
    endDateTime?: Date;
    expandedProperties?: ExpandedProperties;
    readonly id?: string;
    memberType?: MemberType;
    readonly name?: string;
    principalId?: string;
    principalType?: PrincipalType;
    roleDefinitionId?: string;
    roleEligibilityScheduleId?: string;
    scope?: string;
    startDateTime?: Date;
    status?: Status;
    readonly type?: string;
}

// @public
export interface RoleEligibilityScheduleInstanceFilter {
    principalId?: string;
    roleDefinitionId?: string;
    roleEligibilityScheduleId?: string;
    status?: string;
}

// @public
export interface RoleEligibilityScheduleInstanceListResult {
    nextLink?: string;
    value?: RoleEligibilityScheduleInstance[];
}

// @public
export interface RoleEligibilityScheduleInstances {
    get(scope: string, roleEligibilityScheduleInstanceName: string, options?: RoleEligibilityScheduleInstancesGetOptionalParams): Promise<RoleEligibilityScheduleInstancesGetResponse>;
    listForScope(scope: string, options?: RoleEligibilityScheduleInstancesListForScopeOptionalParams): PagedAsyncIterableIterator<RoleEligibilityScheduleInstance>;
}

// @public
export interface RoleEligibilityScheduleInstancesGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RoleEligibilityScheduleInstancesGetResponse = RoleEligibilityScheduleInstance;

// @public
export interface RoleEligibilityScheduleInstancesListForScopeNextOptionalParams extends coreClient.OperationOptions {
    filter?: string;
}

// @public
export type RoleEligibilityScheduleInstancesListForScopeNextResponse = RoleEligibilityScheduleInstanceListResult;

// @public
export interface RoleEligibilityScheduleInstancesListForScopeOptionalParams extends coreClient.OperationOptions {
    filter?: string;
}

// @public
export type RoleEligibilityScheduleInstancesListForScopeResponse = RoleEligibilityScheduleInstanceListResult;

// @public
export interface RoleEligibilityScheduleListResult {
    nextLink?: string;
    value?: RoleEligibilitySchedule[];
}

// @public
export interface RoleEligibilityScheduleRequest {
    readonly approvalId?: string;
    condition?: string;
    conditionVersion?: string;
    readonly createdOn?: Date;
    readonly expandedProperties?: ExpandedProperties;
    readonly id?: string;
    justification?: string;
    readonly name?: string;
    principalId?: string;
    readonly principalType?: PrincipalType;
    readonly requestorId?: string;
    requestType?: RequestType;
    roleDefinitionId?: string;
    scheduleInfo?: RoleEligibilityScheduleRequestPropertiesScheduleInfo;
    readonly scope?: string;
    readonly status?: Status;
    targetRoleEligibilityScheduleId?: string;
    targetRoleEligibilityScheduleInstanceId?: string;
    ticketInfo?: RoleEligibilityScheduleRequestPropertiesTicketInfo;
    readonly type?: string;
}

// @public
export interface RoleEligibilityScheduleRequestFilter {
    principalId?: string;
    requestorId?: string;
    roleDefinitionId?: string;
    status?: string;
}

// @public
export interface RoleEligibilityScheduleRequestListResult {
    nextLink?: string;
    value?: RoleEligibilityScheduleRequest[];
}

// @public
export interface RoleEligibilityScheduleRequestPropertiesScheduleInfo {
    expiration?: RoleEligibilityScheduleRequestPropertiesScheduleInfoExpiration;
    startDateTime?: Date;
}

// @public
export interface RoleEligibilityScheduleRequestPropertiesScheduleInfoExpiration {
    duration?: string;
    endDateTime?: Date;
    type?: Type;
}

// @public
export interface RoleEligibilityScheduleRequestPropertiesTicketInfo {
    ticketNumber?: string;
    ticketSystem?: string;
}

// @public
export interface RoleEligibilityScheduleRequests {
    cancel(scope: string, roleEligibilityScheduleRequestName: string, options?: RoleEligibilityScheduleRequestsCancelOptionalParams): Promise<void>;
    create(scope: string, roleEligibilityScheduleRequestName: string, parameters: RoleEligibilityScheduleRequest, options?: RoleEligibilityScheduleRequestsCreateOptionalParams): Promise<RoleEligibilityScheduleRequestsCreateResponse>;
    get(scope: string, roleEligibilityScheduleRequestName: string, options?: RoleEligibilityScheduleRequestsGetOptionalParams): Promise<RoleEligibilityScheduleRequestsGetResponse>;
    listForScope(scope: string, options?: RoleEligibilityScheduleRequestsListForScopeOptionalParams): PagedAsyncIterableIterator<RoleEligibilityScheduleRequest>;
}

// @public
export interface RoleEligibilityScheduleRequestsCancelOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface RoleEligibilityScheduleRequestsCreateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RoleEligibilityScheduleRequestsCreateResponse = RoleEligibilityScheduleRequest;

// @public
export interface RoleEligibilityScheduleRequestsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RoleEligibilityScheduleRequestsGetResponse = RoleEligibilityScheduleRequest;

// @public
export interface RoleEligibilityScheduleRequestsListForScopeNextOptionalParams extends coreClient.OperationOptions {
    filter?: string;
}

// @public
export type RoleEligibilityScheduleRequestsListForScopeNextResponse = RoleEligibilityScheduleRequestListResult;

// @public
export interface RoleEligibilityScheduleRequestsListForScopeOptionalParams extends coreClient.OperationOptions {
    filter?: string;
}

// @public
export type RoleEligibilityScheduleRequestsListForScopeResponse = RoleEligibilityScheduleRequestListResult;

// @public
export interface RoleEligibilitySchedules {
    get(scope: string, roleEligibilityScheduleName: string, options?: RoleEligibilitySchedulesGetOptionalParams): Promise<RoleEligibilitySchedulesGetResponse>;
    listForScope(scope: string, options?: RoleEligibilitySchedulesListForScopeOptionalParams): PagedAsyncIterableIterator<RoleEligibilitySchedule>;
}

// @public
export interface RoleEligibilitySchedulesGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RoleEligibilitySchedulesGetResponse = RoleEligibilitySchedule;

// @public
export interface RoleEligibilitySchedulesListForScopeNextOptionalParams extends coreClient.OperationOptions {
    filter?: string;
}

// @public
export type RoleEligibilitySchedulesListForScopeNextResponse = RoleEligibilityScheduleListResult;

// @public
export interface RoleEligibilitySchedulesListForScopeOptionalParams extends coreClient.OperationOptions {
    filter?: string;
}

// @public
export type RoleEligibilitySchedulesListForScopeResponse = RoleEligibilityScheduleListResult;

// @public
export interface RoleManagementPolicies {
    delete(scope: string, roleManagementPolicyName: string, options?: RoleManagementPoliciesDeleteOptionalParams): Promise<void>;
    get(scope: string, roleManagementPolicyName: string, options?: RoleManagementPoliciesGetOptionalParams): Promise<RoleManagementPoliciesGetResponse>;
    listForScope(scope: string, options?: RoleManagementPoliciesListForScopeOptionalParams): PagedAsyncIterableIterator<RoleManagementPolicy>;
    update(scope: string, roleManagementPolicyName: string, parameters: RoleManagementPolicy, options?: RoleManagementPoliciesUpdateOptionalParams): Promise<RoleManagementPoliciesUpdateResponse>;
}

// @public
export interface RoleManagementPoliciesDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface RoleManagementPoliciesGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RoleManagementPoliciesGetResponse = RoleManagementPolicy;

// @public
export interface RoleManagementPoliciesListForScopeNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RoleManagementPoliciesListForScopeNextResponse = RoleManagementPolicyListResult;

// @public
export interface RoleManagementPoliciesListForScopeOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RoleManagementPoliciesListForScopeResponse = RoleManagementPolicyListResult;

// @public
export interface RoleManagementPoliciesUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RoleManagementPoliciesUpdateResponse = RoleManagementPolicy;

// @public
export interface RoleManagementPolicy {
    description?: string;
    displayName?: string;
    readonly effectiveRules?: RoleManagementPolicyRuleUnion[];
    readonly id?: string;
    isOrganizationDefault?: boolean;
    readonly lastModifiedBy?: Principal;
    readonly lastModifiedDateTime?: Date;
    readonly name?: string;
    readonly policyProperties?: PolicyProperties;
    rules?: RoleManagementPolicyRuleUnion[];
    scope?: string;
    readonly type?: string;
}

// @public
export type RoleManagementPolicyApprovalRule = RoleManagementPolicyRule & {
    ruleType: "RoleManagementPolicyApprovalRule";
    setting?: ApprovalSettings;
};

// @public
export interface RoleManagementPolicyAssignment {
    readonly id?: string;
    readonly name?: string;
    readonly policyAssignmentProperties?: PolicyAssignmentProperties;
    policyId?: string;
    roleDefinitionId?: string;
    scope?: string;
    readonly type?: string;
}

// @public
export interface RoleManagementPolicyAssignmentListResult {
    nextLink?: string;
    value?: RoleManagementPolicyAssignment[];
}

// @public
export interface RoleManagementPolicyAssignments {
    create(scope: string, roleManagementPolicyAssignmentName: string, parameters: RoleManagementPolicyAssignment, options?: RoleManagementPolicyAssignmentsCreateOptionalParams): Promise<RoleManagementPolicyAssignmentsCreateResponse>;
    delete(scope: string, roleManagementPolicyAssignmentName: string, options?: RoleManagementPolicyAssignmentsDeleteOptionalParams): Promise<void>;
    get(scope: string, roleManagementPolicyAssignmentName: string, options?: RoleManagementPolicyAssignmentsGetOptionalParams): Promise<RoleManagementPolicyAssignmentsGetResponse>;
    listForScope(scope: string, options?: RoleManagementPolicyAssignmentsListForScopeOptionalParams): PagedAsyncIterableIterator<RoleManagementPolicyAssignment>;
}

// @public
export interface RoleManagementPolicyAssignmentsCreateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RoleManagementPolicyAssignmentsCreateResponse = RoleManagementPolicyAssignment;

// @public
export interface RoleManagementPolicyAssignmentsDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface RoleManagementPolicyAssignmentsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RoleManagementPolicyAssignmentsGetResponse = RoleManagementPolicyAssignment;

// @public
export interface RoleManagementPolicyAssignmentsListForScopeNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RoleManagementPolicyAssignmentsListForScopeNextResponse = RoleManagementPolicyAssignmentListResult;

// @public
export interface RoleManagementPolicyAssignmentsListForScopeOptionalParams extends coreClient.OperationOptions {
}

// @public
export type RoleManagementPolicyAssignmentsListForScopeResponse = RoleManagementPolicyAssignmentListResult;

// @public
export type RoleManagementPolicyAuthenticationContextRule = RoleManagementPolicyRule & {
    ruleType: "RoleManagementPolicyAuthenticationContextRule";
    isEnabled?: boolean;
    claimValue?: string;
};

// @public
export type RoleManagementPolicyEnablementRule = RoleManagementPolicyRule & {
    ruleType: "RoleManagementPolicyEnablementRule";
    enabledRules?: EnablementRules[];
};

// @public
export type RoleManagementPolicyExpirationRule = RoleManagementPolicyRule & {
    ruleType: "RoleManagementPolicyExpirationRule";
    isExpirationRequired?: boolean;
    maximumDuration?: string;
};

// @public
export interface RoleManagementPolicyListResult {
    nextLink?: string;
    value?: RoleManagementPolicy[];
}

// @public
export type RoleManagementPolicyNotificationRule = RoleManagementPolicyRule & {
    ruleType: "RoleManagementPolicyNotificationRule";
    notificationType?: NotificationDeliveryMechanism;
    notificationLevel?: NotificationLevel;
    recipientType?: RecipientType;
    notificationRecipients?: string[];
    isDefaultRecipientsEnabled?: boolean;
};

// @public
export interface RoleManagementPolicyRule {
    id?: string;
    ruleType: "RoleManagementPolicyApprovalRule" | "RoleManagementPolicyAuthenticationContextRule" | "RoleManagementPolicyEnablementRule" | "RoleManagementPolicyExpirationRule" | "RoleManagementPolicyNotificationRule";
    target?: RoleManagementPolicyRuleTarget;
}

// @public
export interface RoleManagementPolicyRuleTarget {
    caller?: string;
    enforcedSettings?: string[];
    inheritableSettings?: string[];
    level?: string;
    operations?: string[];
    targetObjects?: string[];
}

// @public
export type RoleManagementPolicyRuleType = string;

// @public (undocumented)
export type RoleManagementPolicyRuleUnion = RoleManagementPolicyRule | RoleManagementPolicyApprovalRule | RoleManagementPolicyAuthenticationContextRule | RoleManagementPolicyEnablementRule | RoleManagementPolicyExpirationRule | RoleManagementPolicyNotificationRule;

// @public
export type Status = string;

// @public
export type Type = string;

// @public
export interface UserSet {
    description?: string;
    id?: string;
    isBackup?: boolean;
    userType?: UserType;
}

// @public
export type UserType = string;

// @public
export interface ValidationResponse {
    errorInfo?: ValidationResponseErrorInfo;
    readonly isValid?: boolean;
}

// @public
export interface ValidationResponseErrorInfo {
    readonly code?: string;
    readonly message?: string;
}


// (No @packageDocumentation comment for this package)

```