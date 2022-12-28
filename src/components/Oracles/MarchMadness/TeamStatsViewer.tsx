import {
  Player,
  StatisticsData,
  PlayerAverage,
  Total,
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
import { TableRowData } from '@/data/MarchMadnessTableData'
import React, { memo, useMemo } from 'react'
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from 'react-icons/hi'

const TeamStatsTable = ({
  full_name,
  average,
  total,
}: Pick<Player, 'full_name' | 'total' | 'average'>) => {
  const tableRows = useMemo(
    () => new Set([...Object.keys(average), ...Object.keys(total)]),
    [],
  )
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

const TeamStatsViewer = ({ statistics }: { statistics: StatisticsData[] }) => {
  return (
    <Accordion allowToggle>
      {statistics.map((stat, i) => (
        <AccordionItem key={i} mb={2} border="none">
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
                {isExpanded && (
                  <Flex gap="6" overflowX="scroll" flexWrap="wrap">
                    {stat.players.map((player, j) => (
                      <TeamStatsTable
                        key={j}
                        full_name={player.full_name}
                        average={player.average}
                        total={player.total}
                      />
                    ))}
                  </Flex>
                )}
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default memo(TeamStatsViewer)
