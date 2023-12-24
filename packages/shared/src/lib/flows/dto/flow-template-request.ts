import { Static, Type } from '@sinclair/typebox'
import { FlowVersion } from '../flow-version'
import { BaseModelSchema } from '../../common'
export const FlowVersionTemplate = Type.Omit(
    FlowVersion,
    ['id', 'created', 'updated', 'flowId', 'state', 'updatedBy'],
)

export type FlowVersionTemplate = Static<typeof FlowVersionTemplate>


export enum TemplateType {
    PLATFORM = 'PLATFORM',
    PROJECT = 'PROJECT',
}
 
export const FlowTemplate = Type.Object({
    ...BaseModelSchema,
    name: Type.String(),
    description: Type.String(),
    type: Type.Enum(TemplateType),
    tags: Type.Array(Type.String()),
    pieces: Type.Array(Type.String()),
    blogUrl: Type.Optional(Type.String()),
    template: FlowVersionTemplate,
    projectId: Type.String(),
    platformId: Type.Optional(Type.String()),
})

export type FlowTemplate = Static<typeof FlowTemplate>


export const ListFlowTemplatesRequest = Type.Object({
    pieces: Type.Optional(Type.Array(Type.String())),
    tags: Type.Optional(Type.Array(Type.String())),
    search: Type.Optional(Type.String()),
})

export type ListFlowTemplatesRequest = Static<typeof ListFlowTemplatesRequest>