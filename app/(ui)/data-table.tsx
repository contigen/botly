"use client"

import { Card, CardHeader } from "@nextui-org/card"
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table"
import { Chip as NChip } from "@nextui-org/chip"
import FlexBox from "./flex-box"
import { ComponentProps as ChipProps } from "./types/component.type"

function Chip({ active, children }: ChipProps & { active?: boolean }) {
  return (
    <NChip
      classNames={{
        base: active ? `bg-black rounded-lg` : `bg-transparent`,
        content: active ? `text-white` : ``,
      }}
    >
      {children}
    </NChip>
  )
}

export function DataTable() {
  return (
    <Card shadow='none' className='p-4 border rounded-3xl'>
      <CardHeader>
        <FlexBox
          alignItems='center'
          justifyContent='between'
          className='w-full'
        >
          <h4>Earnings</h4>
          <FlexBox
            justifyContent='end'
            alignItems='baseline'
            className='gap-3 [&>*]:text-gray-400'
          >
            <Chip active>1D</Chip>
            <Chip>1W</Chip>
            <Chip>1M</Chip>
            <Chip>1Y</Chip>
            <span className='text-sm'>All time</span>
          </FlexBox>
        </FlexBox>
      </CardHeader>
      <Table removeWrapper aria-label='Chatbot earnings table'>
        <TableHeader>
          <TableColumn>Chatbot</TableColumn>
          <TableColumn>Current pledge</TableColumn>
          <TableColumn>Lifetime support</TableColumn>
          <TableColumn>Available storage</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key='1'>
            <TableCell>Tony Reichert</TableCell>
            <TableCell>$80.00</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>128/512 Gb</TableCell>
          </TableRow>
          <TableRow key='2'>
            <TableCell>Zoey Lang</TableCell>
            <TableCell>$160.00</TableCell>
            <TableCell>Paused</TableCell>
            <TableCell>256/512 Gb</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  )
}
