import {
  Player,
  StatisticsData,
  PlayerAverage,
  Total,
  Statistics,
} from '@/types/Statistics'
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Icon,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import React from 'react'
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from 'react-icons/hi'

type TableRowDataProps = {
  id: string
  label: string
}

const TableRowData: TableRowDataProps[] = [
  {
    id: 'stat',
    label: 'Stat',
  },
  {
    id: 'average',
    label: 'Average',
  },
  {
    id: 'total',
    label: 'Total',
  },
]

const TeamStatsTable = ({
  full_name,
  average,
  total,
}: Pick<Player, 'full_name' | 'total' | 'average'>) => {
  const tableRows = new Set([...Object.keys(average), ...Object.keys(total)])

  return (
    <Box
      maxW="calc(33.333% - 24px)"
      flexBasis="calc(33.333% - 24px)"
      flexShrink="0"
      flexGrow="1"
      borderRadius="12px"
      border="1px solid"
      borderColor="tableBorderColor"
      pb={4}
      minH="300px"
    >
      <Box
        py="2.5"
        px="7"
        borderBottom="1px solid"
        borderBottomColor="tableBorderColor"
      >
        <Text color="tableHeaderTextColor" fontWeight={500}>
          {full_name}
        </Text>
      </Box>
      <TableContainer w="full">
        <Table w="full" variant="simple">
          <Thead>
            <Tr>
              {TableRowData.map(row => (
                <Th
                  key={row.id}
                  fontWeight={600}
                  textTransform="capitalize"
                  fontSize="12px"
                  color="oraclesTextColor"
                  bgColor="tableHeaderBackground"
                  borderBottom="1px solid"
                  borderBottomColor="tableBorderColor"
                >
                  {row.label}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {Array.from(tableRows).map(h => {
              return (
                <Tr key={`stat-${h}`}>
                  <Td color="oraclesTextColor" fontWeight={500} fontSize="12px">
                    {h}
                  </Td>
                  <Td color="oraclesTextColor" fontWeight={500} fontSize="12px">
                    {average[h as keyof PlayerAverage]}
                  </Td>
                  <Td color="oraclesTextColor" fontWeight={500} fontSize="12px">
                    {total[h as keyof Total]}
                  </Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}

const TeamStatsViewer = ({ statistics }: { statistics: Statistics }) => {
  const MarchMadnessStats = Object.values(statistics) as StatisticsData[]

  return (
    <Accordion allowToggle>
      {MarchMadnessStats.map((stat, i) => (
        <AccordionItem key={stat.id + i} mb={2} border="none">
          {({ isExpanded }) => (
            <>
              <AccordionButton
                border={isExpanded ? '1px solid' : '1px solid'}
                borderBottom="none"
                borderColor={isExpanded ? 'accordionBorder' : 'transparent'}
                _hover={{ background: 'none' }}
                outline="none"
                p={0}
                borderTopRadius="6px"
              >
                <Flex
                  w="full"
                  p="4"
                  borderRadius="6px"
                  background="accordionButtonColor"
                >
                  <Box as="span" flex="1" textAlign="left">
                    {stat.team.market} {stat.team.name}
                  </Box>
                  {isExpanded ? (
                    <Icon
                      as={HiOutlineMinusCircle}
                      w={6}
                      h={6}
                      color="accordionIconToggle"
                    />
                  ) : (
                    <Icon
                      as={HiOutlinePlusCircle}
                      w={6}
                      h={6}
                      color="accordionIconToggle"
                    />
                  )}
                </Flex>
              </AccordionButton>
              <AccordionPanel
                border={isExpanded ? '1px solid' : '1px solid'}
                borderTop="none"
                borderColor={isExpanded ? 'accordionBorder' : 'transparent'}
                py="6"
                borderBottomRadius="6px"
                overflowX="scroll"
              >
                <Flex gap="6" overflowX="scroll" flexWrap="wrap">
                  {stat.players.map((player, j) => (
                    <TeamStatsTable
                      key={player.id + j}
                      full_name={player.full_name}
                      average={player.average}
                      total={player.total}
                    />
                  ))}
                </Flex>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default TeamStatsViewer
