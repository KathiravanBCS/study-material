import { useState, useMemo } from 'react'
import { AppShell, Box, Group, Image, Text, UnstyledButton, ScrollArea, ThemeIcon, ActionIcon, TextInput, Tooltip, Collapse, Stack } from '@mantine/core'
import { Plus, Search, X, Menu2, ChevronRight, ChevronDown } from 'tabler-icons-react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import atomLogo from '../assets/atom.png'
import classes from './Layout.module.css'
import { navigationData } from './navigationConfig'



export default function Layout() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [expandedItems, setExpandedItems] = useState<string[]>(['Hooks'])

  const currentPath = location.hash.slice(1) || '/'

  const toggleExpand = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    )
  }

  const handleNavigation = (path?: string) => {
    if (path) {
      navigate(path)
    }
  }

  const filteredNavigationData = useMemo(() => {
    const searchLower = searchQuery.toLowerCase().trim()
    if (!searchLower) return navigationData
    return navigationData.filter((link) =>
      link.label.toLowerCase().includes(searchLower)
    )
  }, [searchQuery])

  return (
    <AppShell
      layout="alt"
      navbar={{
        width: { 
          base: isCollapsed ? 110 : 280, 
          xs: isCollapsed ? 110 : 280, 
          sm: isCollapsed ? 110 : 280, 
          md: isCollapsed ? 110 : 280 
        },
        breakpoint: 'sm',
      }}
      padding="md"
    >
      <AppShell.Navbar p={0} className={classes.sidebarContainer}>
        {/* Header */}
        <Box 
          className={classes.sidebarHeader}
          style={{ 
            justifyContent: 'space-between',
            padding: isCollapsed ? '12px' : undefined,
            flexDirection: 'row'
          }}
        >
          {!isCollapsed ? (
            <>
              <Group gap="sm" wrap="nowrap" style={{ flex: 1 }}>
                <ThemeIcon size={40} radius="md" variant="light" color="blue" style={{ flexShrink: 0 }}>
                  <Image src={atomLogo} alt="Study Topics" width={32} height={32} fit="contain" />
                </ThemeIcon>
                <Box style={{ minWidth: 0 }}>
                  <Text size="sm" fw={700} className={classes.logoText} truncate>
                    Study Topics
                  </Text>
                  <Text size="xs" c="dimmed" className={classes.logoSubtext} truncate>
                    Learn & Grow
                  </Text>
                </Box>
              </Group>
              <ActionIcon
                onClick={() => setIsCollapsed(!isCollapsed)}
                variant="subtle"
                color="gray"
                className={classes.toggleButton}
                style={{ flexShrink: 0 }}
              >
                <ChevronRight size={18} />
              </ActionIcon>
            </>
          ) : (
            <>
              <ThemeIcon size={40} radius="md" variant="light" color="blue" style={{ flexShrink: 0 }}>
                <Image src={atomLogo} alt="ST" width={32} height={32} fit="contain" />
              </ThemeIcon>
              <ActionIcon
                onClick={() => setIsCollapsed(!isCollapsed)}
                variant="subtle"
                color="gray"
                style={{ 
                  flexShrink: 0
                }}
              >
                <Menu2 size={18} />
              </ActionIcon>
            </>
          )}
        </Box>
        
        {/* Search Bar */}
        {!isCollapsed && (
          <Box px="sm" pt="sm" pb="xs" style={{ display: isCollapsed ? 'none' : 'block' }}>
            <TextInput
              placeholder="Search topics..."
              size="xs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.currentTarget.value)}
              leftSection={<Search size={14} />}
              rightSection={
                searchQuery ? (
                  <ActionIcon
                    size="xs"
                    variant="subtle"
                    color="gray"
                    onClick={() => setSearchQuery('')}
                  >
                    <X size={12} />
                  </ActionIcon>
                ) : null
              }
            />
          </Box>
        )}

        {/* Navigation Content */}
        <ScrollArea 
          style={{ 
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: isCollapsed ? 'center' : 'stretch',
          }} 
          p={isCollapsed ? "xs" : "sm"}
        >
          <Box 
            className={classes.navItems}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: isCollapsed ? 'center' : 'stretch',
              width: '100%',
              gap: isCollapsed ? '8px' : '0px',
            }}
          >
            {isCollapsed ? (
              // Collapsed view - icons only
              filteredNavigationData.map((link) => {
                const isActive: boolean = currentPath === link.path
                return (
                  <Tooltip key={link.path} label={link.label} position="right" withArrow>
                    <UnstyledButton
                      onClick={() => handleNavigation(link.path)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '8px',
                        borderRadius: '6px',
                        backgroundColor: isActive ? 'var(--mantine-color-blue-0)' : 'transparent',
                        border: isActive ? '2px solid var(--mantine-color-blue-6)' : '2px solid transparent',
                        transition: 'all 150ms ease',
                        cursor: 'pointer',
                        width: '48px',
                        height: '48px',
                      }}
                    >
                      <ThemeIcon size={32} variant="light" color={isActive ? 'blue' : 'gray'} style={{ border: 'none' }}>
                        {link.icon}
                      </ThemeIcon>
                    </UnstyledButton>
                  </Tooltip>
                )
              })
            ) : (
              // Expanded view - full menu
              filteredNavigationData.map((link) => {
                const isActive: boolean = currentPath === link.path
                const isExpanded = expandedItems.includes(link.label)
                
                return (
                  <div key={link.label}>
                    <UnstyledButton
                      onClick={() => {
                        if (link.children) {
                          toggleExpand(link.label)
                        } else {
                          handleNavigation(link.path || '')
                        }
                      }}
                      className={classes.navLink}
                      data-active={isActive.toString()}
                    >
                      <ThemeIcon size={28} variant="light" color={isActive ? 'blue' : 'gray'}>
                        {link.icon}
                      </ThemeIcon>
                      <Text size="sm" fw={isActive ? 600 : 400} style={{ flex: 1 }}>
                        {link.label}
                      </Text>
                      {link.children && (
                        <ChevronDown 
                          size={18} 
                          style={{ 
                            transform: isExpanded ? 'rotate(0deg)' : 'rotate(-90deg)',
                            transition: 'transform 200ms ease'
                          }}
                        />
                      )}
                    </UnstyledButton>
                    
                    {link.children && (
                      <Collapse in={isExpanded}>
                        <Stack gap={0} pl="md" py="xs">
                          {link.children.map((subLink) => {
                            const isSubActive = currentPath === subLink.path
                            return (
                              <UnstyledButton
                                key={subLink.path}
                                onClick={() => handleNavigation(subLink.path)}
                                style={{
                                  padding: '8px 12px',
                                  borderRadius: '6px',
                                  backgroundColor: isSubActive ? 'var(--mantine-color-blue-0)' : 'transparent',
                                  border: isSubActive ? '2px solid var(--mantine-color-blue-6)' : '2px solid transparent',
                                  transition: 'all 150ms ease',
                                  cursor: 'pointer',
                                  textAlign: 'left'
                                }}
                              >
                                <Text 
                                  size="sm" 
                                  fw={isSubActive ? 600 : 400}
                                  c={isSubActive ? 'blue' : 'inherit'}
                                >
                                  {subLink.label}
                                </Text>
                              </UnstyledButton>
                            )
                          })}
                        </Stack>
                      </Collapse>
                    )}
                  </div>
                )
              })
            )}
          </Box>
        </ScrollArea>

        {/* Footer - Add Topic Button */}
        <Box p="sm" style={{ borderTop: '1px solid var(--mantine-color-gray-2)' }}>
          <UnstyledButton
            onClick={() => handleNavigation('/topics')}
            className={classes.addTopicButton}
          >
            {!isCollapsed ? (
              <Group gap="xs">
                <ThemeIcon size={32} variant="light" color="blue">
                  <Plus size={16} />
                </ThemeIcon>
                <Text size="sm" fw={500}>
                  Add Topic
                </Text>
              </Group>
            ) : (
              <ThemeIcon size={32} variant="light" color="blue" style={{ margin: '0 auto' }}>
                <Plus size={16} />
              </ThemeIcon>
            )}
          </UnstyledButton>
        </Box>


      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}
